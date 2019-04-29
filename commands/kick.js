const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kickedUser) return message.channel.send("Can't find that user.");
  let kickReason = args.join(" ").slice(22);
  let botIcon = bot.user.displayAvatarURL;
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You must be staff to use this command!");
  if(kickedUser.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't kick other staff!");
  let kickInfo = new Discord.RichEmbed()
  .setTitle("Kick Info")
  .setDescription("Kicked user information")
  .setColor("#8e0808")
  .addField("User", `${kickedUser}, ID: ${kickedUser.id}`)
  .addField("By", `<@${message.author.id}>, ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kickReason)
  .setFooter("User Kick Info", botIcon);
  let kickChannel = message.guild.channels.find('name', "staff-bot-logging");
  if(!kickChannel) return message.channel.send("Can't find logging channel");
  message.guild.member(kickedUser).kick(kickReason)
  kickChannel.send(kickInfo)

  console.log(`${kickedUser} has been kicked`)
}

module.exports.help = {
  name: "kick"
}
