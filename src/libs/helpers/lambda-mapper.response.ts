import { APIGatewayProxyResultV2 } from 'aws-lambda';

export const Ok = (body: any): APIGatewayProxyResultV2 => ({
	statusCode: 200,
	body: JSON.stringify(body)
});

export const BadRequest = (error: any): APIGatewayProxyResultV2 => ({
	statusCode: 400,
	body: JSON.stringify({
		type: error.type,
		message: error.message,
		details: error.details
	})
});

export const InternalServerError = (error: Error): APIGatewayProxyResultV2 => ({
	statusCode: 500,
	body: JSON.stringify({
		message: error.message
	})
});
