class ImageDomain {
	readonly imageUrl: string;

	constructor(payload) {
		this.imageUrl = payload.imageUrl;
	}

	getBuffer(payload) {
		return Buffer.from(payload, 'base64');
	}

	getLabels(response) {
		const workingItems = response.Labels.filter(({ Confidence }) => Confidence > 80);

		const names = workingItems.map(({ Name }) => Name).join(' and ');
		return { names, workingItems };
	}

	getTextLabels(response, workingItems) {
		const finalText: any = [];
		const { TranslatedText } = response;
		const texts = TranslatedText.split(' e ');

		for (const indexText in texts) {
			const nameInPortuguese = texts[indexText];
			const confidence: number = workingItems[indexText].Confidence;
			const text = `${confidence.toFixed(2)}% de ser do tipo ${nameInPortuguese}`;
			finalText.push(text);
		}

		return finalText.join('\n');
	}
}

export default ImageDomain;
