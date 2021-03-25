const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

const m = await message.channel.send("HI .... MY NAME IS KINE AND MY OWNER IS MUKESH 🍁 🇮🇳</> #9420. CLICK GHELP TO SEE MORE COMMANDS");
}

let hi = new  Discord.Message

module.exports.help = {
  name: "hi",
   aliases: ["HI"],
}