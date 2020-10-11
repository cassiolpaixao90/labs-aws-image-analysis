import { Handler } from '../../libs/adapters';
import { Ok } from '../../libs/helpers/lambda-mapper.response';
import { ImageDto } from './dto';
import { IImageService } from './service';

class ImageHandler implements Handler {
	constructor(private readonly imageService: IImageService) {}

	async main(imageDto: ImageDto): Promise<any> {
		const response = await this.imageService.execute(imageDto.queryStringParameters);
		return Ok({ labels: response });
	}
}

export default ImageHandler;
