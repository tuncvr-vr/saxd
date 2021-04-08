const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
  const kayıtkanalı = await db.fetch(`yetkilikayıtk_${message.guild.id}`)
  if(kayıtkanalı == null) return message.channel.send('');
  if (message.channel.id !== kayıtkanalı) return message.channel.send(`Sadece Kayıt Kanalından Kayıt Edebilirsiniz!`);
  
  if(!message.member.hasPermission(db.fetch(`yetkilirolk_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const user = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    setTimeout(function(){user.roles.add(db.fetch(`kadınrolk_${message.guild.id}`))},1000)
    setTimeout(function(){user.roles.remove(db.fetch(`yetkilikayıtalınacak_${message.guild.id}`))},1000)
    user.setNickname(`[${nick}] [${yas}]`)
    const embed = new Discord.MessageEmbed()
    .setAuthor("Erkek Üye Kaydı Yapıldı!")
    .addField(`Kaydı yapılan\n`, `${user.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `[${nick}] [${yas}]`)
    .setFooter("KMD Kayıt Sistemi")
    .setColor("BLUE")
    message.channel.send(`${message.author} Kayıt İşlemi Başarılı!`)
    db.add(`erkekistatistik${message.author.id}.${message.guild.id}`, 1)
    message.guild.channels.cache.get(db.fetch(`yetkilikayıtlogk_${message.guild.id}`)).send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: "kadın @etiket"
};
   