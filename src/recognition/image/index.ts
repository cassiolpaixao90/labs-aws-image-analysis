import { adapterValidator, adapterErrorHandler, adapterHandler } from '../../libs/adapters';
import { makeImageHandler, makeImageSchema } from './factory';
import { MiddlewareAdapter } from '../../libs/adapters/lambda-adapter.middleware';

export const handler = new MiddlewareAdapter(adapterHandler(makeImageHandler()))
	.use(adapterValidator(makeImageSchema()))
	.use(adapterErrorHandler());
