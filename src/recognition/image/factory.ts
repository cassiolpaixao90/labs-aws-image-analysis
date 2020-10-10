import ImageHandler from './handler';
import { ImageService } from './service';
import { ImageSchema } from './validation';

export const makeImageHandler = (): any => {
	const imageService = new ImageService();
	return new ImageHandler(imageService);
};

export const makeImageSchema = (): any => {
	return { schema: ImageSchema, key: 'queryStringParameters' };
};
