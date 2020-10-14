const DiscordOauth2 = require('discord-oauth2');
const oauth = new DiscordOauth2();

const config = require('../config.json');

function addServer() {
	const express = require('express');
	const app = express();

	app.get('/', async function(req, res) {
		if (!req.query.code) {
			res.send('<a href=https://discord.com/api/oauth2/authorize?client_id=676864099832954884&permissions=2080762967&redirect_uri=https%3A%2F%2Fauth.meetaimod.ml&response_type=code&scope=identify%20guilds.join%20bot>Invite AIMod</a>');
		}
		else {
			const tokenRes = await oauth.tokenRequest({
				clientId: config.clientId,
				clientSecret: config.clientSecret,

				code: req.query.code,
				scope: 'identify guilds.join',
				grantType: 'authorization_code',

				redirectUri: 'https://auth.meetaimod.ml',
			});

			const userRes = await oauth.getUser(tokenRes.access_token);

			oauth.addMember({
				accessToken: tokenRes.access_token,
				botToken: config.token,
				guildId: '757991475941343352',
				userId: userRes.id,
			});

			res.send('Thank you for adding AIMod to your server! You have been added to the official AIMod suppot server, and are being redirected there! (If you are not redirected, please click <a href=https://discord.com/channels/757991475941343352/757992913043980339>here</a>.<meta http-equiv="Refresh" content="0; url=\'https://discord.com/channels/757991475941343352/758713829545869312\'" />');
		}
	});

	app.listen(8080);
}

module.exports = addServer;