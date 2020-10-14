const axios = require('axios');
const config = require('../config.json');

function postStats(client) {
	discordbotlistStats(client);
	discordlabsStats(client);
	discordbotsggStats(client);
	botListSpace(client);
}

function discordbotlistStats(client) {
	// discordbotlist.com
	axios
		.post('https://discordbotlist.com/api/v1/bots/676864099832954884/stats', {
			guilds: client.guilds.cache.size,
		}, {
			headers: {
				Authorization: config.apiTokens.discordBotList,
			},
		})
		.then(res => {
			console.log(`[STAT POST GOOD] Statistics posted to discordbotlist.com - STATUS CODE ${res.status} - STATUS TEXT ${res.statusText}`);
		})
		.catch(error => {
			console.error(`[STAT POST FAIL] Statistic post to discordbotlist.com failed - ${error}`);
		});
}

function discordlabsStats(client) {
	// discordlabs.org
	axios
		.post('https://bots.discordlabs.org/v2/bot/676864099832954884/stats', {
			token: config.apiTokens.discordLabs,
			server_count: client.guilds.cache.size,
		})
		.then(res => {
			console.log(`[STAT POST GOOD] Statistics posted to bots.discordlabs.org - STATUS CODE ${res.status} - STATUS TEXT ${res.statusText}`);
		})
		.catch(error => {
			console.error(`[STAT POST FAIL] Statistic post to bots.discordlabs.org failed - ${error}`);
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
			console.log(`[STAT POST GOOD] Statistics posted to discord.bots.gg - STATUS CODE ${res.status} - STATUS TEXT ${res.statusText}`);
		})
		.catch(error => {
			console.error(`[STAT POST FAIL] Statistic post to discord.bots.gg failed - ${error}`);
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
			console.log(`[STAT POST GOOD] Statistics posted to botlist.space - STATUS CODE ${res.status} - STATUS TEXT ${res.statusText}`);
		})
		.catch(error => {
			console.error(`[STAT POST FAIL] Statistic post to botlist.space failed - ${error}`);
		});
}

module.exports = postStats;