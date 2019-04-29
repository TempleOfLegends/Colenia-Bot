const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bannedUser) return message.channel.send("Can't find that user.");
  let banReason = args.join(" ").slice(22);
  let botIcon = bot.user.displayAvatarURL;
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You must be staff to use this command!");
  if(bannedUser.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban other staff!");
  let banInfo = new Discord.RichEmbed()
  .setTitle("Ban Info")
  .setDescription("Banned user information")
  .setColor("#8e0808")
  .addField("User", `${bannedUser}, ID: ${bannedUser.id}`)
  .addField("By", `<@${message.author.id}>, ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", banReason)
  .setFooter("User Ban Info", botIcon);
  let banChannel = message.guild.channels.find('name', "staff-bot-logging");
  if(!banChannel) return message.channel.send("Can't find logging channel");
  message.guild.member(bannedUser).ban(banReason)
  banChannel.send(banInfo)

  console.log(`${bannedUser} has been banned`)
}

module.exports.help = {
  name: "ban"
}
