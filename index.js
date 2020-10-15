// require these files and modules
// fs allows the program to read it's filesystem
const fs = require('fs');

// construct the Discord client, which allows
// us to interface with the Discord API
const Discord = require('discord.js');
// the intents line tells Discord which events
// the bot would like to recieve
const client = new Discord.Client({ ws: { intents: 14335 } });

// define cooldowns as a collection
const cooldowns = new Discord.Collection();

// define chalk, which colors the commmand line outputs
const chalk = require('chalk');
// define the chalk presets
const chalkError = chalk.bold.red;
const chalkWarning = chalk.bold.yellow;
const chalkSuccess = chalk.green;
const chalkStartup = chalk.bgMagenta.bold;
const chalkCommandRun = chalk.bgGreen.bold;
const chalkCommandFail = chalk.bgRed.bold;

// define outside functions that the bot will use
const postStats = require('./functions/poststats.js');
const keepAlive = require('./functions/serverlistner');

// define config, which will be used to store secret variables
const config = require('./config.json');

// define dbl which will allow the bot to use the dbl API
const DBL = require('dblapi.js');
const dbl = new DBL(config.apiTokens.top, client);

// define Statcord which shows the bot's stats
const Statcord = require('statcord.js');
const statcord = new Statcord.Client({
	client,
	key: config.statcordKey,
	postCpuStatistics: true,
	postMemStatistics: true,
	postNetworkStatistics: true,
});

// identify and define command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();
console.log(chalkStartup('[STARTUP]') + chalkSuccess(' Command files identified and parsed:'), commandFiles);

// parse command files
// do this for every file in the commands/ directory
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// do this once the bot logs in
client.on('ready', () => {
	console.log(chalkStartup('[STARTUP]') + chalkSuccess(' Connected to Discord API'));
	console.log(chalkStartup('[STARTUP]') + chalkSuccess(' Currently protecting ' + `${client.users.cache.size}` + ' users, in ' + `${client.channels.cache.size}` + ' channels of ' + `${client.guilds.cache.size}` + ' guilds.'));
	console.log(chalkStartup('[STARTUP]') + chalkSuccess(' Ready! Listening for commands...'));
	console.log(chalkStartup('[STARTUP]') + chalkSuccess(' Log started! Details about any executed commands will be logged here from now on.'));

	// post stats to various websites
	postStats(client);
	statcord.autopost();
});

// post stats to top.gg
dbl.on('posted', () => {
	console.log(chalkCommandRun('[STAT POST GOOD]') + chalkSuccess(' Statistics posted to top.gg'));
});
dbl.on('error', error => {
	console.error(chalkCommandFail('[STAT POST FAIL]') + chalkWarning(` Statistic post to top.gg failed - ${error}`));
});

// post stats every 15 minutes
setInterval(function() {
	postStats(client);
}, 1800000);

// set activity every minute
setInterval(function() {
	client.user.setActivity(`aim!help | Protecting ${client.users.cache.size}` + ' users in ' + `${client.guilds.cache.size}` + ' guilds.', { type: 'WATCHING' })
		.catch(console.error(chalkCommandFail('[STATUS UPDATE FAIL]') + chalkWarning(' Status update failed, unknown error.')));
}, 60000);

// do this when a message is sent
client.on('message', message => {
	// if the message was sent by a bot or doesn't start with the prefix, ignore it
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	// define arguments
	// split anything after the command into arguments
	const args = message.content.slice(config.prefix.length).split(/ +/);
	// shift the arguments to lowercase
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
	// don't exit or give an error if a alias was sent instead of the command, and figure out which alias it is
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

	// do this if there's arguments required but no arguments were provided
	if (command.args && !args.length) {
		let reply = `Oops! You didn't provide any arguments, ${message.author}!`;

		// explain the proper usage
		if (command.usage) {
			reply += `\nThe proper usage of this command would be: \`${config.prefix}${command.name} ${command.usage}\``;
		}
		console.log(chalkCommandFail('[COMMAND FAIL]') + chalkWarning(` NO ARGS - USER ${message.author.tag} - COMMAND ${command.name}`));
		return message.channel.send(reply);

	}

	// do this if there's a cooldown
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	// define what time it is
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	// define how long the cooldown is
	const cooldownAmount = (command.cooldown || 3) * 1000;
	// if the user who sent the command is under a cooldown...
	if (timestamps.has(message.author.id)) {
		// figure out how much longer their cooldown is
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		// if their cooldown isn't over yet...
		if (now < expirationTime) {
			// tell them how much time is left
			const timeLeft = (expirationTime - now) / 1000;
			console.log(chalkCommandFail('[COMMAND FAIL]') + chalkWarning(` COOLDOWN - USER ${message.author.tag} - COMMAND ${command.name} - REMAINING ${timeLeft.toFixed(1)}`));
			return message.reply(`Sorry! This command has a cooldown. Please wait ${timeLeft.toFixed(1)} more second(s) before trying the \`${command.name}\` command again!`);
		}
	}
	// clear the cooldown when it's over
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	// do this if you send a guildonly command in a dm
	if (command.guildOnly && message.channel.type !== 'text') {
		console.log(chalkCommandFail('[COMMAND FAIL]') + chalkWarning(` GIULDONLY IN DM - USER - ${message.author.tag} COMMAND - ${command.name}`));

		return message.reply('I can\'t execute that command inside direct messages! Please try again in a server!');
	}

	// if all of the above passes, finally run the command
	try {
		command.execute(message, args);
		// eslint-disable-next-line no-shadow
		console.log(chalkCommandRun('[COMMAND EXECUTED]') + chalkSuccess(` COMMAND ${command.name} - USER ${message.author.tag} - ARGS ${args.map(args => args).join(', ')}`));

		statcord.postCommand(command.name, message.author.id);
	}
	// but... if the command fails do this
	catch (error) {
		console.log(chalkCommandFail('[COMMAND FAIL]') + chalkError(' UNKNOWN FAILURE IN EXECUTION - PLEASE SEE ERROR BELOW\n', error));
		message.reply('Oops! There was an error trying to execute that command! You can either attempt to run it again, or let us know by submitting a bug report!');
	}
});

statcord.on('autopost-start', () => {
	console.log(chalkCommandRun('[STAT POST START]') + chalkSuccess(' Started Statcord autopost...'));
});

statcord.on('post', status => {
	if (!status) console.log(chalkCommandRun('[STAT POST GOOD]') + chalkSuccess(' Stats posted to Statcord'));
	else console.error(chalkCommandFail('[STAT POST FAIL]') + chalkWarning(` Statistic post to Statcord failed - ${status}`));
});

// run the keepAlive code
keepAlive();
// log in!
client.login(config.token);