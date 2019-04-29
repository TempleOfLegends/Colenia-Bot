const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.has(`337661014701244426`)) {
    return message.channel.send(`You aren't a Donator ${message.author}!`)
  }
  else if (!args.length){
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
  } else if (args.length < 3) {
    return message.channel.send(`You need to provide 2 colors and your faction name, ${message.author}!`);
  } else {
    let colorWant = args.join(" ").slice(22);
    let botIcon = bot.user.displayAvatarURL;
    let colorEmbed = new Discord.RichEmbed()
    .setTitle("Color Info")
    .setDescription("Donator Color Information")
    .setColor("#8e0808")
    .addField("Outline", args[0])
    .addField("Base", args[1])
    .addField("Faction", args[2])
    .addField("By", `<@${message.author.id}>, ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .setFooter("Donor Color Info", botIcon);
    let colorChannel = message.guild.channels.find('name', "request-nation-colors");
    if(!colorChannel) {
      return message.channel.send("Can't find logging channel.");
    }
    else {
      colorChannel.send(colorEmbed)
    }
    message.delete(1);



  }
}

module.exports.help = {
  name: "color"
}
