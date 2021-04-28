const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setAuthor(
      `HELP`,
      "https://cdn.glitch.com/8cb34785-d377-4ef6-818c-137f48581a4e%2Fgif%20gif.gif?v=1614936176218"
    )
    .setColor("RED")
    .setTitle("_Command List_")
    .setDescription(
      "Below are Commands you can do with Bot,  more commands will be added soon.")
    .addField("❯ INFO", "My prefix is g")
    
    .addField(
      " ❯ GIVEAWAY ",
      "`start` [channel-name] [Time] [winners] [Prize]\n`reroll` [prize name]\n`end` [prize name]"
    )
    .addField("❯ UTILITY", "`ping`, `emoji`, `invite`", true)
    .addField(
      " ❯ INFORMATION ",
      "`stats`, `avatar`, `prefix`, `userinfo`, `membercount`",
      true
    )
    .addField(
      "❯ FUN",
      "`rock`, `poll`, `meme`, `dm`, `fun`, `rip`, `hungry`, `happy`, `sad`, `angry`, `math`"
    )
    .addField(" ❯ EXTERNAL", "`hi`, `bye`, `alok`, `ff`")
    .addField("❯ MODERATION", "`purge`")
   
    .setTimestamp()
    .setFooter("© Kine");
  message.channel.send("**Check DMs**");

  return message.author.send(help);
};

module.exports.help = {
  name: "help"
};
