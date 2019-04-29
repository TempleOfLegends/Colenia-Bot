const botconfig = require ("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");

  if(jsfile.length <= 0){
    console.log("Couldn't find commands.")
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded.`)
    bot.commands.set(props.help.name, props)
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`play.colenia.net | ~binfo`, { type: 'PLAYING' });
  bot.user.setStatus('online')
});

bot.on("message", async message => {

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  let cmdfile =  bot.commands.get(cmd.slice(prefix.length));
  if(cmdfile) cmdfile.run(bot,message,args);
});

bot.on("channelCreate", async channel => {
  console.log(`${channel.name} has been created`)

  let cChannel = channel.guild.channels.find(`name`, "staff-bot-logging");
  let channelEmbed = new Discord.RichEmbed()
  .setTitle("Channel Creation")
  .setDescription("Channel creation information")
  .setColor("#109aff")
  .addField("Channel Created", `${channel.name} has been created`)
  .addField("Time", channel.createdAt);
  cChannel.send(channelEmbed);

});

bot.on("channelDelete", async channel => {
  console.log(`${channel.name} has been deleted`)

  let cChannel = channel.guild.channels.find(`name`, "staff-bot-logging");
  let channelEmbed = new Discord.RichEmbed()
  .setTitle("Channel Deletion")
  .setDescription("Channel deletion information")
  .setColor("#109aff")
  .addField("Channel Deleted", `${channel.name} has been deleted`)
  cChannel.send(channelEmbed);

});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} has joined the server`)
  let wlChannel = member.guild.channels.find(`name`, "kings-cross")
  wlChannel.send(`<:colenia:337939648531660800> Hey ${member}, welcome to **Colenia**! <:colenia:337939648531660800>`)
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} has left the server`)
  let wlChannel = member.guild.channels.find(`name`, "kings-cross")
  wlChannel.send(`Aight <@${member.id}>, bye lad. `)
});


bot.login(botconfig.token)
