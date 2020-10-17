import middy from '@middy/core';
import eventNormalizer from '@middy/http-event-normalizer';
import jsonBodyParser from '@middy/http-json-body-parser';
import { adapterValidator, adapterErrorHandler, adapterHandler } from '../../libs/adapters';
import { makeImageHandler, makeImageSchema } from './factory';

export const handler = middy(adapterHandler(makeImageHandler()))
	.use(eventNormalizer())
	.use(jsonBodyParser())
	.use(adapterValidator(makeImageSchema()))
	.use(adapterErrorHandler());
