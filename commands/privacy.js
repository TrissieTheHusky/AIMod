module.exports = {
	name: 'privacy',
	description: 'View the bot\'s privacy policy',
	args: false,
	usage: '',
	cooldown: 5,
	aliases: ['tos', 'policy'],
	guildOnly: false,
	execute(message) {
		message.channel.send('**AIMOD PRIVACY POLICY**\n**Data Collection**\nAIMod will log all commands run and any errors encountered for debugging and analytics purposes. However, AIMod **does not** store this data in any way, and it is only visible to AIMod developers. Only the following data is logged: Statistics about servers, incluing member count; commands run, alon with details about who executed them; errors encountered; and messages reported.\n\n**Data Use**\nAIMod uses data collected solely for debugging and analytics purposes. It will never be sold for any reason.\n\n**Data Sharing**\nWe use Google\'s Perspective API to analyze reported messages, and the content of any reported message is sent to Google for analasys. We **do not** send any additional information, including who reported the message and who it was sent by, and we request that Google not store any information sent to them.\n\n**Contact**\nIf you have any concerns about the bot, please join our support server and open a ticket. (Hint: run `aim!invite`!)\n\n**PLEASE KEEP IN MIND THAT COLLECTED INFORMATION IS NOT STORED BY AIMOD.**');
	},
};