export interface Handler {
	main(event: any): Promise<any>;
}

export const adapterHandler = (handler: Handler) => {
	return async (event) => {
		return handler.main(event);
	};
};
