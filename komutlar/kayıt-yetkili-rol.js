const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let yetkilirol = message.mentions.roles.first()
  if (!yetkilirol) return message.channel.send('Lütfen yetkili rolünü etiketlermisin?')
   
  db.set(`yetkilirolk_${message.guild.id}`, yetkilirol.id)
  message.channel.send(`Yetkili Rolü Başarıyla Ayarlandı; **${yetkilirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-yetkili-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};