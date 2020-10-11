import { BadRequestException } from '../errors';

export const adapterValidator = ({ schema, key }) => ({
	before: async (handler, next) => {
		try {
			if (!schema) {
				return next();
			}

			const value = handler.event[key];
			await schema.validate(value, { abortEarly: false }).then();

			return next();
		} catch (err) {
			throw new BadRequestException({ message: err.name, details: err.errors });
		}
	}
});
