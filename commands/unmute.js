const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(`name`, "Gulag");

  let mutedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutedUser) return message.channel.send("Can't find that user.");
  await(mutedUser.removeRole(role.id));
  console.log(`${mutedUser} has been unmuted`)

}

module.exports.help = {
  name: "unmute"
}
