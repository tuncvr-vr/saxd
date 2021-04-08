const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let anket = args.slice(0).join(" ")
if(!anket) return message.channel.send("Ne Anketi Yapıcaz?")
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
let Kexpert = new Discord.MessageEmbed()
.setFooter(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
.setTitle(message.guild.name +" Anket")
.setDescription(`
${anket}

<a:tik1:819480965037948928> → Anketi Kabul Edersiniz.
<a:no1:819480968338341969> → Anketi Kabul Etmezsiniz.
`)
message.channel.send(Kexpert).then(async m => {
await m.react("<a:tik1:819480965037948928>")
await m.react("<a:no1:819480968338341969>")
})
}
// CrewCode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'anket',
  description: "Discord Code Share Anket Komutu",
  usage: '-anket <ahnketyapılcakmesaj>'
}