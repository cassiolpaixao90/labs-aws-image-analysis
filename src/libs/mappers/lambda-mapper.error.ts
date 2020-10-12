import * as MapperResponseError from './lambda-mapper.response';

export const lambdaMapperError = (error: any): any => {
	const errors = ['BadRequest', 'InternalServerError'];

	const response =
		(errors.includes(error.type) && MapperResponseError[error.type]) || MapperResponseError.InternalServerError;

	return response(error);
};
