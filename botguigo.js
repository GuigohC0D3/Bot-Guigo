const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const dotenv= require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID} = proces.dotenv;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado com ${c.user.tag}`);
});

client.login(token);