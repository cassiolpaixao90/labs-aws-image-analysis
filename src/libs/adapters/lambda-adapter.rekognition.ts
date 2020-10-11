import * as aws from 'aws-sdk';

const rekognition = new aws.Rekognition();

export interface Recognition {
	detectLabels(params): Promise<any>;
}

export class AdapterRekognition implements Recognition {
	async detectLabels(params) {
		return rekognition.detectLabels(params).promise();
	}
}
