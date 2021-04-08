const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let yetkilikayıtlog = message.mentions.channels.first()
if (!yetkilikayıtlog) return message.channel.send('Lütfen Kayıt Log Kanalını Etiketlermisin?')
   
  db.set(`yetkilikayıtlogk_${message.guild.id}`, yetkilikayıtlog.id)
  message.channel.send(`Kayıt Log Kanalı Başarıyla Ayarlandı; **${yetkilikayıtlog}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'yetkili-kayıt-log-ayarla',
 description: 'kayıt Log kanalı seçersiniz',
 usage: 'kayıt-log <#kanal>'
};