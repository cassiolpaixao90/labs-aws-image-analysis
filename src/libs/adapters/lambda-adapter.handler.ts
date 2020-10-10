export interface Handler {
	main(event: any): Promise<any>;
}

export const adapterHandler = (handler: Handler) => {
	return async (event: any) => {
		return handler.main(event);
	};
};
