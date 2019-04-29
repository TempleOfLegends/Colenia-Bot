const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(`name`, "Gulag");
  let botIcon = bot.user.displayAvatarURL;
  let mutedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutedUser) return message.channel.send("Can't find that user.");
  let muteReason = args.join(" ").slice(22);

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You must be staff to use this command!");
  if(mutedUser.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't mute other staff!");
  let muteInfo = new Discord.RichEmbed()
  .setTitle("Mute Info")
  .setDescription("Muted user information")
  .setColor("#8e0808")
  .addField("User", `${mutedUser}, ID: ${mutedUser.id}`)
  .addField("By", `<@${message.author.id}>, ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", muteReason)
  .setFooter("User Mute Info", botIcon);
  let muteChannel = message.guild.channels.find('name', "staff-bot-logging");
  if(!muteChannel) return message.channel.send("Can't find logging channel");
  muteChannel.send(muteInfo)
  await(mutedUser.addRole(role.id));
  console.log(`${mutedUser} has been muted`)

}

module.exports.help = {
  name: "mute"
}
