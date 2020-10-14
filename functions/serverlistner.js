const express = require('express');
const server = express();

const chalk = require('chalk');
const chalkSuccess = chalk.green;
const chalkStartup = chalk.bgMagenta.bold;

server.all('/', (req, res)=>{
	res.send('AIMod is now online. Pinging this URL will bring AIMod online if there are any issues.');
});

function keepAlive() {
	server.listen(3000, ()=>{
		console.log(chalkStartup('[STARTUP]') + chalkSuccess(' Server listner ready'));
	});
}

module.exports = keepAlive;