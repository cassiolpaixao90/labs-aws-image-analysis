import * as Yup from 'yup';

export const ImageSchema = Yup.object().shape({
	queryStringParameters: Yup.object().shape({
		imageUrl: Yup.string().url().required()
	})
});
