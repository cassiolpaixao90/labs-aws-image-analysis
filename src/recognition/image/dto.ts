import { MapperToDto } from '../../libs/mappers/lambda-mapper.dto';

export interface ImageDto extends MapperToDto<'queryStringParameters'> {
	queryStringParameters: {
		imageUrl: string;
	};
}
