const chalk = require('chalk');
const chalkSuccess = chalk.green;
const chalkCommandRun = chalk.bgGreen.bold;
module.exports = {
	name: 'ping',
	description: 'Pings the bot to test if it\'s working.',
	args: false,
	usage: '',
	cooldown: 5,
	aliases: ['test'],
	guildOnly: false,
	execute(message) {
		message.channel.send('Pinging, please wait...').then(pingMessage =>{
			const ping = pingMessage.createdTimestamp - message.createdTimestamp;

			pingMessage.edit(`**:ping_pong: Pong! Ping time is:** \`${ping}ms\``);
			console.log(chalkCommandRun('[BOT PINGED]') + chalkSuccess(` PING ${ping}ms`));
		});
	},
};