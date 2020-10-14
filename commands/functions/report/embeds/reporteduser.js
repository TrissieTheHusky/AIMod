const Discord = require('discord.js');

function reportedUserEmbed(message, nickname, newNickname, reportedUser, toxicity) {
	const reportedMessageAuthorEmbedMessage = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle(`ALERT: Your name was changed in \`${message.guild.name}\`!`)
		.setAuthor('AIMod', 'https://i.imgur.com/ixo0NXw.png')
		.setDescription(`This notification is to alert you that Your name was changed in \`${message.guild.name}\` Additional details are listed below.`)
		.setThumbnail('https://i.imgur.com/1rDbpvM.png')
		.addFields(
			{ name: 'OLD USERNAME', value: nickname, inline: true },
			{ name: 'NEW USERNAME', value: newNickname, inline: true },
			{ name: 'SERVER', value: message.guild.name, inline: true },
			{ name: 'REASON', value: `Your message was determined by our machine learning algorythms to be **toxic** with **${toxicity * 100}%** certianty. I randomly generated a new username.` },
		)
		.setTimestamp()
		.setFooter(`This message was sent to ${reportedUser.tag}`, reportedUser.displayAvatarURL({ format: 'png' }));

	reportedUser.send(reportedMessageAuthorEmbedMessage);
}

module.exports = reportedUserEmbed;