import * as Yup from 'yup';

export const ImageSchema = Yup.object().shape({
	imageUrl: Yup.string().url().required()
});
