function helpMessage(data, commands, message) {
	const helpMessageText = ('**AIMod** allows you to report rude messages and usernames in your server, and then the bot will use a machine learning algorhythm to determine if the message or username is innapropriate or not. If the message or username is deemed innapropriate, the bot will automatically delete the message or change the username and notify everyone involved.\n\n**How To Use AIMod:**\nIf you see a message or username that is toxic, please report it with the `aim!report <id or mention>` command, where `ID` is the **Message ID** of the message you would like to report, or `mention` is the username/mention of the user you would like to report.\n\n**Help! I can\'t find a message ID!**\nThe ability to find a message ID is a developer setting that is *not* on be default. To enable it, go to `Settings->Appearence` and turn `Developer Mode` **on**. Then, you can open the `More` menu beside a message and click `Copy ID` to copy a message\'s ID to your clipboard!\n\n**Do you have any more commands?**\nYes, I do! Run the `aim!help list` command to get a list of all of my commands.');

	return message.author.send(helpMessageText)
		.then(() => {
			// if the command was sent outside a DM, let the author know that the commands have been sent to their messages
			if (message.channel.type === 'dm') return;
			message.reply('I\'ve sent you a DM with more information!');
		})

		.catch(error => {
			// catch any errors and tell the author along with logging it to the console
			console.error(`[COMMAND FAIL] Failed to send help DM to ${message.author.tag}. View error below:\n`, error);
			message.reply('It seems like I can\'t DM you! Do you have DMs disabled?');
		});
}

module.exports = helpMessage;