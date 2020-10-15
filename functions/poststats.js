const axios = require('axios');
const config = require('../config.json');

const chalk = require('chalk');
const chalkWarning = chalk.bold.yellow;
const chalkSuccess = chalk.green;
const chalkStatPostGood = chalk.bgGreen.bold;
const chalkStatPostFail = chalk.bgRed.bold;

function postStats(client) {
	discordlabsStats(client);
	discordbotsggStats(client);
	botListSpace(client);
}

function discordlabsStats(client) {
	// discordlabs.org
	axios
		.post('https://bots.discordlabs.org/v2/bot/676864099832954884/stats', {
			token: config.apiTokens.discordLabs,
			server_count: client.guilds.cache.size,
		})
		.then(res => {
			console.log(chalkStatPostGood('[STAT POST GOOD]') + chalkSuccess(` Statistics posted to bots.discordlabs.org - STATUS CODE ${res.status} - STATUS TEXT ${res.statusText}`));
		})
		.catch(error => {
			console.error(chalkStatPostFail('[STAT POST FAIL]') + chalkWarning(` Statistic post to bots.discordlabs.org failed - ${error}`));
		});
}

function discordbotsggStats(client) {
	// discord.bots.gg
	axios
		.post('https://discord.bots.gg/api/v1/bots/676864099832954884/stats', {
			guildCount: client.guilds.cache.size,
		}, {
			headers: {
				Authorization: config.apiTokens.discordBotsGg,
				'User-Agent': ' AIMod-2998/1.0 (discord.js; +https://github.com/CamdanMead/aimod) DBots/676864099832954884',
			},
		})
		.then(res => {
			console.log(chalkStatPostGood('[STAT POST GOOD]') + chalkSuccess(` Statistics posted to discord.bots.gg - STATUS CODE ${res.status} - STATUS TEXT ${res.statusText}`));
		})
		.catch(error => {
			console.error(chalkStatPostFail('[STAT POST FAIL]') + chalkWarning(` Statistic post to discord.bots.gg failed - ${error}`));
		});
}

function botListSpace(client) {
	// botlist.space
	axios
		.post('https://api.botlist.space/v1/bots/676864099832954884', {
			server_count: client.guilds.cache.size,
		}, {
			headers: {
				Authorization: config.apiTokens.botListSpace,
				'Content-Type': 'application/json',
			},
		})
		.then(res => {
			console.log(chalkStatPostGood('[STAT POST GOOD]') + chalkSuccess(` Statistics posted to botlist.space - STATUS CODE ${res.status} - STATUS TEXT ${res.statusText}`));
		})
		.catch(error => {
			console.error(chalkStatPostFail('[STAT POST FAIL]') + chalkWarning(` Statistic post to botlist.space failed - ${error}`));
		});
}

module.exports = postStats;