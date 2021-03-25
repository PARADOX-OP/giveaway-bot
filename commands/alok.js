const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let alok = new Discord.MessageEmbed()
    .setDescription("DJ ALOK")
    .setColor('RANDOM')
    .setImage("https://cdn.discordapp.com/attachments/817275634233114644/818043617712537610/download.jpeg")

      message.channel.send(alok);
}

module.exports.help = {
  name: "alok"
}