import ImageHandler from './handler';
import { ImageService } from './service';
import { ImageSchema } from './validation';
import { AdapterClient, AdapterRekognition, AdapterTranslate } from '../../libs/adapters';
import { MapperClientResponse } from '../../libs/mappers/lambda-mapper.client';

export const makeImageHandler = () => {
	const adapterRekognition = new AdapterRekognition();
	const adapterTranslate = new AdapterTranslate();
	const adapterClient = new AdapterClient(new MapperClientResponse());
	const imageService = new ImageService(adapterRekognition, adapterTranslate, adapterClient);
	return new ImageHandler(imageService);
};

export const makeImageSchema = () => {
	return { schema: ImageSchema };
};
