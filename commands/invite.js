module.exports = {
	name: 'invite',
	description: 'Get a link to invite the bot!',
	args: false,
	usage: '',
	cooldown: 5,
	aliases: ['add', 'link'],
	guildOnly: false,
	execute(message) {
		message.channel.send('You can get more info about me and invite me here: https://dbots.cc/aimod');
	},
};