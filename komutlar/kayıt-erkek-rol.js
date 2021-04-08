const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let erkekrol = message.mentions.roles.first()
  if (!erkekrol) return message.channel.send('Lütfen erkek rolünü etiketlermisin?')
   
  db.set(`erkekrolk_${message.guild.id}`, erkekrol.id)
  message.channel.send(`Erkek Rolü Başarıyla Ayarlandı; **${erkekrol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-erkek-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};