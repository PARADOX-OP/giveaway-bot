const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let sad = new Discord.MessageEmbed()
    .setDescription("SAD")
    .setColor('RANDOM')
    .setImage("https://cdn.discordapp.com/emojis/800617145503055913.png")

      message.channel.send(sad);
}

module.exports.help = {
  name: "sad"
}