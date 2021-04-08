const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let yetkilimesajkanal = message.mentions.channels.first()
  if (!yetkilimesajkanal) return message.channel.send('Lütfen Hoşgeldin Mesajını Atacağım Kanalı Etiketlermisin?')
   db.set(`yetkilikgirismesajı_${message.guild.id}`, yetkilimesajkanal.id)
  
  message.channel.send(`Sunucuya Yeni Üye Katılınca ${yetkilimesajkanal} Kanalına \`Hoşgeldin -uye- Kayıt Olmak İçin Kayıt Kanalına İsmini Yaz Ve Yetkilileri Bekle!`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'yetkili-giriş-mesajı',
        description: 'giriş mesajı yollar',
        usage: 'giriş-mesaj-ayarla'
}