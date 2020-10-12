import { InternalServerException } from '../errors';

export interface MapperClient {
	response(body: any): any;
}

export class MapperClientResponse implements MapperClient {
	constructor() {
		this[200] = this.setOk;
		this[500] = this.setInternalServer;
		this[503] = this.setServiceUnavailable;
		this[504] = this.timeOut;
	}

	response(body: any) {
		const mapper = this[body.status] || this.setInternalServer;
		return mapper(body);
	}

	setOk(body) {
		return { data: body.data };
	}

	setInternalServer(body) {
		return { error: new InternalServerException(body.data) };
	}

	setServiceUnavailable(body) {
		return { error: new InternalServerException(body.data) };
	}

	timeOut(body) {
		return { error: new InternalServerException(body.data) };
	}
}
