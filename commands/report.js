const getToxicity = require('./functions/report/gettoxicity.js');

const reportedMessageAuthorEmbed = require('./functions/report/embeds/reportedmessageauthor.js');
const reportedUserEmbed = require('./functions/report/embeds/reporteduser.js');

const goby = require('goby');

const chalk = require('chalk');
const chalkSuccess = chalk.green;
const chalkCommandRun = chalk.bgGreen.bold;

module.exports = {
	name: 'report',
	description: 'Report a message or user if the message or the user\'s username is toxic.',
	args: true,
	usage: '<message ID or mention>',
	cooldown: 600,
	aliases: ['tattle', 'alert', 'reportuser', 'reportmessage'],
	guildOnly: true,
	execute(message, args) {
		if (message.mentions.users.size) {
			const reportedUser = message.mentions.users.first();

			const member = message.guild.member(reportedUser);
			const nickname = member ? member.displayName : null;

			getToxicity(nickname).then(toxicity => {
				if (toxicity > 0.90) {
					const newNickname = goby.init().generate(['adj', 'pre', 'suf']);
					member.setNickname(newNickname);
					message.author.send(`**HEADS UP:** The user you reported, \`${nickname}\` from \`${message.guild.name}\` was renamed \`${newNickname}\`. Thank you for reporting and keeping the server clean! (The nickname was found to be **toxic** with **${toxicity * 100}%** certianty.)`);
					reportedUserEmbed(message, nickname, newNickname, reportedUser, toxicity);
				}
				else {
					message.author.send(`**HEADS UP:** The user you reported, \`${nickname}\` from \`${message.guild.name}\` had no action taken against them because our machine learning algorythms determined that their username was **not an issue** with **${100 - (toxicity * 100)}%** certianty. If you feel this is an error, please alert the server's mods. **NO ACTION HAS BEEN TAKEN.**`);
				}
				console.log(`[USER REPORTED] NAME ${nickname} - SCORE ${toxicity}`);
				message.delete();
			});
		}
		else if (!isNaN(parseInt(args[0]))) {
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
		}
		else {
			message.channel.send('You need to mention a user or provide a message ID!');
		}

	},
};