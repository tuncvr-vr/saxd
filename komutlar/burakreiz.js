const Discord = require("discord.js");
exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
   "Uuuuu terliyorum",
   "Okulda ne var müdür MÜDÜR",
   "Bennu ve mutlu MUTLU",
   "Ankara mesi ankara mesi"
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RED")
.setThumbnail("https://media.discordapp.net/attachments/789023023918743562/803017978609926164/maxresdefault.jpg")
.setTitle("Burak Reis Diyor Ki:")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["burak-reis"],
  permLevel: 0
};

exports.help = {
  name: "burakreiz"
};