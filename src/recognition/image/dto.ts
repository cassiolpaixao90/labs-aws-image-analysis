import { MapperToDto } from '../../libs/helpers/lambda-mapper.dto';

export interface ImageDto extends MapperToDto<'queryStringParameters'> {
	queryStringParameters: {
		imageUrl: string;
	};
}
