const Discord = require("discord.js")
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {

let {body} = await superagent.get(`http://aws.random.cat/meow`);

let catEmbed = new Discord.RichEmbed()
.setColor("#FFDF00")
.setTitle("Random Cat :cat:")
.setImage(body.file);

message.channel.send(catEmbed);

}

module.exports.help = {
  name: "cat"
}
