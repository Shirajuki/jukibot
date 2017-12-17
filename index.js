var Discord = require('discord.js');
var bot = new Discord.Client();

bot.login('MzQyMjE1OTgyMDQ1MjAwMzg0.DRh3UQ.J5XdJ1RAzSXP-GigBUP9E6AVxmc');

bot.on('ready', () => {
  console.log('Started!');
  bot.user.setPresence({ game: { name: 'qhelp: nyaa', type: 0 } });
});

bot.on('message', (message) => {	
	// Set the prefix
	let prefix = "q";
	// Exit and stop if the prefix is not there or if user is a bot
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	//qhelp
	if (message.content == (prefix + "help")) {
		message.channel.send({embed: {
		color: 3447003,
		author: {
			name: bot.user.username,
			icon_url: bot.user.avatarURL
		},
		title: "Commands",
		url: "http://shirajuki.github.io/moe/",
		description: "Why q as prefix? Because its COOL COOLER COOLEST!",
		fields: [{
			name: "qwaa",
			value: "Moe-sama uses Cry"
		},
			{
			name: "qpat",
			value: "Moe-sama uses Pat"
		},
			{
			name: "qwww",
			value: "Moe-sama uses Laugh"
		},
			{
			name: "qsay text",
			value: "Let Moe-sama write for you"
		},
			{
			name: "qtalk text",
			value: "Let Moe-sama talk for you"
		},
			{
			name: "qroll",
			value: "Moe-sama rolls a number from 1-100"
		},
			{
			name: "qdice",
			value: "Moe-sama rolls a dice"
		},
			{
			name: "qrps rock/paper/scissor",
			value: "Play RockPaperScissor with Moe-sama"
		},
			{
			name: "qmuda/qora",
			value: "MUDA! MUDA! MUDA! ORA! ORA! ORA!"
		}
		],
		timestamp: new Date(),
		footer: {
		icon_url: bot.user.avatarURL,
		text: "© Shirajuki"
		}
	}});
	}
	//qwaa
	if (message.content == (prefix + "waa")) {
		var x = Math.floor((Math.random() * 6) + 1);
		message.delete().catch(owo=>{}); 
		if (x == 1) {
			message.channel.send("https://dl.dropboxusercontent.com/s/g9l1cw2wn7sfjje/cry1.gif ");
		}else if (x == 2) {
			message.channel.send("https://dl.dropboxusercontent.com/s/ue7tkiddu1f4ras/cry2.gif ");
		}else if (x == 3) {
			message.channel.send("https://dl.dropboxusercontent.com/s/w0823mk8vpktevi/cry3.gif ");
		}else if (x == 4) {
			message.channel.send("https://dl.dropboxusercontent.com/s/wqwx85elyde1sql/cry4.gif ");
		}else if (x == 5) {
			message.channel.send("https://dl.dropboxusercontent.com/s/t025u5hcaxen84d/cry5.gif ");	
		}else if (x == 6) {
			message.channel.send("https://dl.dropboxusercontent.com/s/981ybvx9fc5dhqk/cry6.gif ");
		}
	}
	//qpat
	if (message.content == (prefix + "pat")) {
		var x = Math.floor((Math.random() * 6) + 1);
		message.delete().catch(owo=>{}); 
		if (x == 1) {
			message.channel.send("https://dl.dropboxusercontent.com/s/l56jiwtjilxhbsq/pat1.gif ");
		}else if (x == 2) {
			message.channel.send("https://dl.dropboxusercontent.com/s/d4ihdid50x8kxw9/pat2.gif ");
		}else if (x == 3) {
			message.channel.send("https://dl.dropboxusercontent.com/s/by9nxp4vcwpxfyb/pat3.gif ");
		}else if (x == 4) {
			message.channel.send("https://dl.dropboxusercontent.com/s/lensian6wm00kgv/pat4.gif ");
		}else if (x == 5) {
			message.channel.send("https://dl.dropboxusercontent.com/s/uokb0bmlsmjylig/pat5.gif ");
		}else if (x == 6) {
			message.channel.send("https://dl.dropboxusercontent.com/s/o6qhbao9x18quzr/pat6.gif ");
		}
	}
	//qwww
	if (message.content == (prefix + "www")) {
		var x = Math.floor((Math.random() * 6) + 1);
		message.delete().catch(owo=>{}); 
		if (x == 1) {
			message.channel.send("https://dl.dropboxusercontent.com/s/7ldux9ijjks9q3h/www1.gif ");
		}else if (x == 2) {
			message.channel.send("https://dl.dropboxusercontent.com/s/h3nt5os0sqhiey7/www2.gif ");
		}else if (x == 3) {
			message.channel.send("https://dl.dropboxusercontent.com/s/ocq7o3cnvyxbbo5/www3.gif ");
		}else if (x == 4) {
			message.channel.send("https://dl.dropboxusercontent.com/s/94drfumac49m97j/www4.gif ");
		}else if (x == 5) {
			message.channel.send("https://dl.dropboxusercontent.com/s/yucy7najax5fbgb/www5.gif ");
		}else if (x == 6) {
			message.channel.send("https://dl.dropboxusercontent.com/s/ceswgl5slp0xuf8/www6.gif ");
		}
	}
	//qgood
	if (message.content == (prefix + "good")) {
		var x = Math.floor((Math.random() * 6) + 1);
		message.delete().catch(owo=>{}); 
		if (x == 1) {
			message.channel.send("https://dl.dropboxusercontent.com/s/n16vt67p3o069bs/good1.gif ");
		}else if (x == 2) {
			message.channel.send("https://dl.dropboxusercontent.com/s/7i60ll9mlwv39mz/good2.gif" );
		}else if (x == 3) {
			message.channel.send("https://dl.dropboxusercontent.com/s/uogrxydegdm7xuh/good3.gif ");
		}else if (x == 4) {
			message.channel.send("https://dl.dropboxusercontent.com/s/crff04omjyut8id/good4.gif ");
		}else if (x == 5) {
			message.channel.send("https://dl.dropboxusercontent.com/s/v5ieookkwtlt2w1/good5.gif	 ");
		}else if (x == 6) {
			message.channel.send("https://dl.dropboxusercontent.com/s/nyojzrqa9e0xp15/good6.gif ");
		}
	}
	//qroll
	if (message.content == (prefix + "roll")) {
		var x = Math.floor((Math.random() * 100) + 1);
		message.delete().catch(owo=>{}); 
		message.reply(" RNG'ed " + x);
	}
	//qdice
	if (message.content == (prefix + "dice")) {
		var x = Math.floor((Math.random() * 6) + 1);
		message.delete().catch(owo=>{}); 
		message.reply(" rolled a dice and got number " + x);
	}
	//qrps rock/paper/scissor
	var messagesplit = message.content.split(" ")
	if (message.content.startsWith(prefix + "rps")) {
		if (messagesplit[1] == "rock") {
			var x = Math.floor((Math.random() * 3) + 1);
			if (x == 1) {
				message.channel.send("Scissor");
				message.reply("Win!");
			}else if (x == 2) {
				message.channel.send("Paper");
				message.reply("Lose!");
			}else if (x == 3) {
				message.channel.send("Rock");
				message.reply("Lose!");
			}
		}
		if (messagesplit[1] == "paper") {
			var x = Math.floor((Math.random() * 3) + 1);
			if (x == 1) {
				message.channel.send("Scissor");
				message.reply("Lose!");
			}else if (x == 2) {
				message.channel.send("Paper");
				message.reply("Lose!");
			}else if (x == 3) {
				message.channel.send("Rock");
				message.reply("Win!");
			}
		}
		if (messagesplit[1] == "scissor") {
			var x = Math.floor((Math.random() * 3) + 1);
			if (x == 1) {
				message.channel.send("Scissor");
				message.reply("Lose!");
			}else if (x == 2) {
				message.channel.send("Paper");
				message.reply("Win!");
			}else if (x == 3) {
				message.channel.send("Rock");
				message.reply("Lose!");
			}
		}
	}
	//qmuda
	if (message.content == (prefix + "muda")) {
		message.delete().catch(owo=>{}); 
		message.channel.send("http://i.imgur.com/oNcHdPX.gif");
	}
	//qora
	if (message.content == (prefix + "ora")) {
		message.delete().catch(owo=>{}); 
		message.channel.send("http://i.imgur.com/1wb4XCj.gif");
	}
	//qsay (message)
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	if(message.content.startsWith(prefix + "say")) {
		const sayMessage = args.slice(1).join(' ');
		message.delete().catch(owo=>{}); 
		message.channel.send(sayMessage);
	}
	//qtalk (message)
	const args2 = message.content.slice(prefix.length).trim().split(/ +/g);
	if(message.content.startsWith(prefix + "talk")) {
		const sayMessage = args2.slice(1).join(' ');
		message.delete().catch(owo=>{}); 
		message.channel.send(sayMessage, {tts: true});
	}
	//qpurge (@user) n
	if (!message.content.startsWith("qpurge")) return;
	const user = message.mentions.users.first();
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
	if (!amount) return 
	if (!amount) returnmessage.reply('Must specify an amount to delete! BAKA!');
	if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge! BAKA!');
		message.channel.fetchMessages({
		limit: amount,
	}).then((messages) => {
	if (user) {
	const filterBy = user ? user.id : Client.user.id;
		messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
	}
	message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
	});
});	
const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});
setInterval(() => {
  http.get('http://jukibot.herokuapp.com');
}, 900000);
