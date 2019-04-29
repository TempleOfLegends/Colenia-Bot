const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let serverIcon = message.guild.iconURL;
  let botIcon = bot.user.displayAvatarURL;
  let serverInfo = new Discord.RichEmbed()
  .setTitle("Server Info")
  .setDescription("Server information")
  .setColor("#109aff")
  .setThumbnail(serverIcon)
  .addField("Name", message.guild.name)
  .addField("Creation Date", message.guild.createdAt)
  .addField("Join Date", message.member.joinedAt)
  .addField("Members", message.guild.memberCount)
  .setFooter(`${message.guild.name} Info`, botIcon);
  return message.channel.send(serverInfo);

  console.log(`Someone checked the servers info`)

}

module.exports.help = {
  name: "sinfo"
}
