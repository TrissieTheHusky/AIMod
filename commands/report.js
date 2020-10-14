const getToxicity = require('./functions/report/gettoxicity.js');

const reportedMessageAuthorEmbed = require('./functions/report/embeds/reportedmessageauthor.js');

const chalk = require('chalk');
const chalkSuccess = chalk.green;
const chalkCommandRun = chalk.bgGreen.bold;

module.exports = {
	name: 'report',
	description: 'Report a message if the message is toxic.',
	args: true,
	usage: '<message ID>',
	cooldown: 600,
	aliases: ['tattle', 'alert', 'reportmessage'],
	guildOnly: true,
	execute(message, args) {
		const reportedMessageID = args[0];

		message.channel.messages.fetch(reportedMessageID).then(reportedMessage => {
			getToxicity(reportedMessage.content).then(toxicity => {
				if (toxicity > 0.90) {
					message.channel.messages.fetch(reportedMessageID).then(deleteMessage => {
						deleteMessage.delete();
						message.author.send(`**HEADS UP:** The message you reported, \`${reportedMessage.content}\` was deleted from **${reportedMessage.guild.name}**. Thank you for reporting and keeping the server clean! (The message was found to be **toxic** with **${toxicity * 100}%** certianty.)`);
						reportedMessageAuthorEmbed(reportedMessage, toxicity);
					});
				}
				else {
					message.author.send(`**HEADS UP:** The message you reported, \`${reportedMessage.content}\` in **${reportedMessage.guild.name}** was not deleted because our machine learning algorythms determined that the message was **not an issue** with **${100 - (toxicity * 100)}%** certianty. If you feel this is an error, please alert the server's mods. **NO ACTION HAS BEEN TAKEN.**`);
				}
				console.log(chalkCommandRun('[MESSAGE REPORTED]') + chalkSuccess(` MESSAGE ${reportedMessage.content} - SCORE ${toxicity}`));
				message.delete();
			});
		});
	},
};