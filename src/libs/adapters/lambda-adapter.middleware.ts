import middy from '@middy/core';
import eventNormalizer from '@middy/http-event-normalizer';
import jsonBodyParser from '@middy/http-json-body-parser';

export class MiddlewareAdapter {
	[x: string]: any;

	constructor(handler: any) {
		this.handler = middy(handler);
		this.init();
	}

	init() {
		const middleware = [jsonBodyParser(), eventNormalizer()];
		middleware.forEach((h) => this.handler.use(h));
	}

	use(handler) {
		this.handler.use(handler);
		return this.handler;
	}
}
