const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

var img = ["https://i.ibb.co/6vbttMk/bird1.jpg", "https://i.ibb.co/VWvFC3w/bird2.jpg", "https://i.ibb.co/hZfW8Ph/bird3.jpg", "https://i.ibb.co/J3n1jQy/bird4.jpg", "https://i.ibb.co/JrTNDPy/bird5.jpg", "https://i.ibb.co/ZV2K4Vn/bird6.jpg", "https://i.ibb.co/dtv4Wmr/bird7.jpg", "https://i.ibb.co/vDP3FFz/bird8.jpg", "https://i.ibb.co/JHdzkvq/bird9.jpg", "https://i.ibb.co/QMCv6Hm/bird11.png", "https://i.ibb.co/LQ0N5Zf/bird12.jpg"];
var num = Math.floor(Math.random() * (img.length+1));

let birdEmbed = new Discord.RichEmbed()
.setColor("#FFDF00")
.setTitle("Random Bird :bird:")
.setImage(img[num]);


message.channel.send(birdEmbed);

}

module.exports.help = {
  name: "bird"
}
