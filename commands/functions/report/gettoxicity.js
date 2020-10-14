const config = require('../../../config.json');
const request = require('request-promise-native');

async function getToxicity(message) {
	try {
		const result = await request({
			method: 'POST',
			uri: `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${config.perspectiveKey}`,
			body: {
				comment: { text: message },
				languages: ['en'],
				requestedAttributes: { TOXICITY: {} },
				doNotStore: true,
			},
			json: true,
		});

		return result.attributeScores.TOXICITY.summaryScore.value;
	}
	catch (error) {
		console.error(error);
	}
}

module.exports = getToxicity;