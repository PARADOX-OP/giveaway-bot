const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let angry = new Discord.MessageEmbed()
    .setDescription("ANGRY")
    .setImage("https://cdn.discordapp.com/attachments/817299737338183713/817340309612003328/angry_angry.gif")
      message.channel.send(angry);
}

module.exports.help = {
  name: "angry"
}