module.exports = {
	name: 'info',
	description: 'Get info about the bot!',
	args: false,
	usage: '',
	cooldown: 5,
	aliases: ['about'],
	guildOnly: false,
	execute(message) {
		message.channel.send('**Hello!** My name is AIMod.\nI was **created by** `@CamTheHelpDesk#5701`.\nI **run on** `discord.js v12`, however, there are **plans to migrate** my code to a **custom library** that fits my needs better.\nIf you need **help**, join my **support server** at discord.gg/3zzE4n7');
	},
};