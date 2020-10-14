const Discord = require('discord.js');

function reportedMessageAuthorEmbed(reportedMessage, toxicity) {
	const reportedMessageAuthorEmbedMessage = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle('ALERT: One of your messages was deleted!')
		.setAuthor('AIMod', 'https://i.imgur.com/ixo0NXw.png')
		.setDescription(`This notification is to alert you that a message you sent in **${reportedMessage.guild.name}** was deleted. Additional details are listed below.`)
		.setThumbnail('https://i.imgur.com/1rDbpvM.png')
		.addFields(
			{ name: 'MESSAGE', value: reportedMessage.content },
			{ name: 'REASON', value: `Your message was determined by our machine learning algorythms to be **toxic** with **${toxicity * 100}%** certianty.`, inline: true },
			{ name: 'SERVER', value: reportedMessage.guild.name, inline: true },
			{ name: 'CHANNEL', value: reportedMessage.channel, inline: true },
		)
		.setTimestamp()
		.setFooter(`This message was sent to ${reportedMessage.author.tag}`, reportedMessage.author.displayAvatarURL({ format: 'png' }));

	reportedMessage.author.send(reportedMessageAuthorEmbedMessage);
}

module.exports = reportedMessageAuthorEmbed;