const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let rip = new Discord.MessageEmbed()
    .setDescription("RIP")
    .setImage("https://cdn.discordapp.com/emojis/794448598397747241.png")

      message.channel.send(rip);
}

module.exports.help = {
  name: "rip"
}
