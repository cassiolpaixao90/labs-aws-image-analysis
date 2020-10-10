import { BadRequestException } from '../errors';

export const adapterValidator = ({ schema, key }) => ({
	before: (handler, next) => {
		if (!schema) {
			return next();
		}
		const value = handler.event[key];
		const { error } = schema.validate(value, { abortEarly: false });
		if (error) {
			throw new BadRequestException({ message: 'Validation Error', details: error.details });
		}

		return next();
	}
});
