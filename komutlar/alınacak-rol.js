const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let yetkilikayıtalınacakrol = message.mentions.roles.first()
  if (!yetkilikayıtalınacakrol) return message.channel.send('Lütfen Alınacak rolü etiketlermisin?')
   
  db.set(`yetkilikayıtalınacak_${message.guild.id}`, yetkilikayıtalınacakrol.id)
  message.channel.send(`Alınacak Rol Başarıyla Ayarlandı; **${yetkilikayıtalınacakrol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'yetkili-kayıt-alınacak-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};