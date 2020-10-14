const config = require('../../../config.json');
const prefix = config.prefix;

function commandInfo(data, commands, message, command) {
	if (!command) {
		return message.reply('Oops! That\'s not a valid command!');
	}

	data.push(`**Name:** ${command.name}`);
	if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
	if (command.description) data.push(`**Description:** ${command.description}`);
	if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
	data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

	message.channel.send(data, { split: true });
}

module.exports = commandInfo;