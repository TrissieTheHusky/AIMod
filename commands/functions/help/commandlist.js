const config = require('../../../config.json');
const prefix = config.prefix;

function commandList(data, commands, message) {
	data.push('Here\'s a list of all my commands:\n');
	data.push(commands.map(command => '`' + prefix + command.name + '` - ' + command.description).join('\n'));
	data.push(`\nYou can send \`${prefix}help [command name]\` to get detailed info on a specific command!`);

	return message.author.send(data, { split: true })
		.then(() => {
			if (message.channel.type === 'dm') return;
			message.reply('I\'ve sent you a DM with all my commands!');
		})

		.catch(() => {
			message.reply(data, { split: true });
		});
}


module.exports = commandList;