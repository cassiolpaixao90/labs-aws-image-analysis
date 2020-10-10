class LambdaException extends Error {
	[x: string]: any;

	constructor({ type, message, details }) {
		super();
		Error.captureStackTrace(this, this.constructor);
		this.name = this.constructor.name;
		this.type = type;
		this.message = message;
		this.details = details;
		this.stack = this.stack;
	}
}

export class BadRequestException extends LambdaException {
	constructor(error?: any) {
		const message = typeof error === 'string' ? error : error?.message || 'Bad Request';
		super({ type: 'BadRequest', message, details: error?.details });
	}
}

export class InternalServerException extends LambdaException {
	constructor(error?: any) {
		const message = typeof error === 'string' ? error : error?.message || 'Internal Server Error';
		super({ type: 'InternalServerError', message, details: error?.details });
	}
}
