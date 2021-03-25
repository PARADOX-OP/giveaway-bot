const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let bye = new Discord.MessageEmbed()
    .setDescription("BYE")
    .setImage("https://cdn.discordapp.com/attachments/817299737338183713/817332036330192896/bye_bye.gif")

      message.channel.send(bye);
}

module.exports.help = {
  name: "bye"
}