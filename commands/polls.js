const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(`name`, "Poll Lovers");
  if(message.member.roles.has(role.id)) {
    await(message.member.removeRole(role.id));
    return message.channel.send("You have opted out of Colenia surveys!")
  } else {
    await(message.member.addRole(role.id));
    return message.channel.send("You have opted in for Colenia surveys!")
  }



}

module.exports.help = {
  name: "polls"
}
