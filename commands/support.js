module.exports = {
	name: 'support',
	description: 'Join the support server!',
	args: false,
	usage: '',
	cooldown: 5,
	aliases: ['supportserver'],
	guildOnly: false,
	execute(message) {
		message.channel.send('If you need **help**, join my **support server** at discord.gg/3zzE4n7');
	},
};