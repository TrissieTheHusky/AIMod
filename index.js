const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: 14335 } });
const cooldowns = new Discord.Collection();

const config = require('./config.json');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Connected to Discord API');
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Sorry! This command has a cooldown. Please wait ${timeLeft.toFixed(1)} more second(s) before trying the \`${command.name}\` command again!`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	if (command.guildOnly && message.channel.type !== 'text') {

		return message.reply('I can\'t execute that command inside direct messages! Please try again in a server!');
	}

	if (command.args && !args.length) {
		let reply = `Oops! You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage of this command would be: \`${config.prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);

	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		message.reply('Oops! There was an error trying to execute that command! You can either attempt to run it again, or let us know by submitting a bug report!');
	}
});

client.login(config.token);