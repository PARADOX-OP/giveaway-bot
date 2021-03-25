const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let hungry = new Discord.MessageEmbed()
    .setDescription("HUNGRY")
    .setColor('RANDOM')
    .setImage("https://cdn.discordapp.com/attachments/817257607605518386/817258043652833300/hungry.gif")

      message.channel.send(hungry);
}

module.exports.help = {
  name: "hungry"
}