const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let kadınrol = message.mentions.roles.first()
  if (!kadınrol) return message.channel.send('Lütfen kadın rolünü etiketlermisin?')
   
  db.set(`kadınrolk_${message.guild.id}`, kadınrol.id)
  message.channel.send(`Kadın Rolü Başarıyla Ayarlandı; **${kadınrol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-kadın-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};