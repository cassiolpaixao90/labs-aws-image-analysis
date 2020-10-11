import ImageHandler from './handler';
import { ImageService } from './service';
import { ImageSchema } from './validation';
import { AdapterClient, AdapterRekognition, AdapterTranslate } from '../../libs/adapters';
import { MapperClientResponse } from '../../libs/helpers/lambda-mapper.client';

export const makeImageHandler = (): any => {
	const adapterRekognition = new AdapterRekognition();
	const adapterTranslate = new AdapterTranslate();
	const adapterClient = new AdapterClient(new MapperClientResponse());
	const imageService = new ImageService(adapterRekognition, adapterTranslate, adapterClient);
	return new ImageHandler(imageService);
};

export const makeImageSchema = (): any => {
	return { schema: ImageSchema, key: 'queryStringParameters' };
};
