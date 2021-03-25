const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let ff = new Discord.MessageEmbed()
    .setDescription("FREE FIRE")
    .setColor('RANDOM')
    .setImage("https://cdn.discordapp.com/emojis/816296547201318918.gif")

      message.channel.send(ff);
}

module.exports.help = {
  name: "ff"
}