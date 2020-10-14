const commandInfo = require('./functions/help/commandinfo.js');
const helpMessage = require('./functions/help/helpmessage.js');
const commandList = require('./functions/help/commandslist');

module.exports = {
	name: 'help',
	description: 'Explains how to use the bot!',
	args: false,
	usage: '<command (optional) | list>',
	cooldown: 5,
	aliases: ['guide', 'man', 'info', 'howto'],
	guildOnly: false,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			helpMessage(data, commands, message);
		}
		if (args[0] == 'list') {
			commandList(data, commands, message);
		}
		else {
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
			commandInfo(data, commands, message, command);
		}
	},
};