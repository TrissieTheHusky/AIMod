const commandInfo = require('./functions/help/commandinfo.js');
const helpMessage = require('./functions/help/helpmessage.js');
const commandList = require('./functions/help/commandlist');

module.exports = {
	name: 'help',
	description: 'Explains how to use the bot!',
	// keep in mind that the args variable here defines if there are required arguments, the command will still parse arguments properly if it's set to false
	args: false,
	usage: '<command (optional) | list>',
	cooldown: 5,
	aliases: ['guide', 'man', 'info', 'howto'],
	guildOnly: false,
	execute(message, args) {
		// define new constants, parse arguments and parse command aliases if they exist for the command in question
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			// if there's no arguments, reply with this message
			helpMessage(data, commands, message);
		}

		if (args[0] == 'list') {
			// if the list argument is passed, give a list of commands
			commandList(data, commands, message);
		}
		else if (args[0]) {
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
			// if there are arguments, send information on the command
			commandInfo(data, commands, message, command);
		}
	},
};