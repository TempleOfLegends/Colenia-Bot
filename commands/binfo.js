const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let botIcon = bot.user.displayAvatarURL;
  let botInfo = new Discord.RichEmbed()
  .setTitle("Bot Info")
  .setDescription("Bot user information")
  .setColor("#109aff")
  .setThumbnail(botIcon)
  .addField("Name", bot.user.username)
  .addField("Author", "PastaManMarco#3811")
  .addField("Creation Date", bot.user.createdAt)
  .addField("Prefix", "~")
  .addField("Commands", "binfo, sinfo, ping, dog, cat, bird, color")
  .setFooter("Colenia Bot Info", botIcon);
  return message.channel.send(botInfo);

  console.log(`Someone checked the bots info`)

}

module.exports.help = {
  name: "binfo"
}
