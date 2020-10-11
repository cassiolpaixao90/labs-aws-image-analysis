import Joi, { ObjectSchema } from '@hapi/joi';

export const ImageSchema: ObjectSchema = Joi.object({
	imageUrl: Joi.string().uri().required()
});
