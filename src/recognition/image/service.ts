import ImageDomain from './domain';
import { Recognition, Translate, Client } from '../../libs/adapters';

export interface IImageService {
	execute(payload): Promise<any>;
}

export class ImageService implements IImageService {
	constructor(
		private readonly recognition: Recognition,
		private readonly translate: Translate,
		private readonly client: Client
	) {}

	async execute(payload): Promise<any> {
		const image = new ImageDomain(payload);

		const { data, error } = await this.client.get(image.imageUrl, {
			responseType: 'arraybuffer'
		});

		if (error) {
			throw error;
		}

		const buffer = image.getBuffer(data);

		const recognitionResponse = await this.recognition.detectLabels({
			Image: {
				Bytes: buffer
			}
		});

		const { names, workingItems } = image.getLabels(recognitionResponse);

		const translateResponse = await this.translate.translateText({
			SourceLanguageCode: 'en',
			TargetLanguageCode: 'pt',
			Text: names
		});

		const textFormatted = image.getTextLabels(translateResponse, workingItems);

		return textFormatted;
	}
}
