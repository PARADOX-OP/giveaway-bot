const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let happy = new Discord.MessageEmbed()
    .setDescription("HAPPY")
    .setColor('RANDOM')
    .setImage("https://cdn.discordapp.com/attachments/818474006159949864/819524904848195614/happy.gif")

      message.channel.send(happy);
}

module.exports.help = {
  name: "happy"
}