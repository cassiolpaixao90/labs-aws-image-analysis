import ImageDomain from './domain';

export interface IImageService {
	execute(payload): Promise<any>;
}

export class ImageService implements IImageService {
	async execute(payload): Promise<any> {
		return new ImageDomain(payload);
	}
}
