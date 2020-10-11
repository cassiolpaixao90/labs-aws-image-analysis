import axios from 'axios';
import { MapperClient } from '../helpers/lambda-mapper.client';

export interface Axios {
	get(url: string, options?: any): Promise<any>;
}

export class AdapterClient implements Axios {
	constructor(private readonly mapperClient: MapperClient) {}

	async get(url: string, options?: any) {
		return this.mapperClient.response(await axios.get(url, options));
	}
}
