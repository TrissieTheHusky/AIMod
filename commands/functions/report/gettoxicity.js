const config = require('../../../config.json');

const { Client } = require('@conversationai/perspectiveapi-js-client');
const perspective = new Client(config.perspectiveKey);

const options = {
	languages: ['en'],
	attributes: ['TOXICITY'],
	doNotStore: true,
};

async function getToxicity(message) {
	try {
		const result = await perspective.getScores(message, options);

		return result.TOXICITY;
	}
	catch (error) {
		console.error(error);
	}
}

module.exports = getToxicity;