import { APIGatewayProxyEventV2 as Event } from 'aws-lambda';

export type MapperToDto<K extends keyof Event> = Pick<Event, Exclude<keyof Event, K>>;
