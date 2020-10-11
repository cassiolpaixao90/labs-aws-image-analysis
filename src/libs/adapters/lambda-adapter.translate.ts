import * as aws from 'aws-sdk';

const translate = new aws.Translate();

export interface Translate {
	translateText(params): Promise<any>;
}

export class AdapterTranslate implements Translate {
	async translateText(params) {
		return translate.translateText(params).promise();
	}
}
