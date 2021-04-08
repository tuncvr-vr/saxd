const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let yetkilikayıtkanalı = message.mentions.channels.first()
if (!yetkilikayıtkanalı) return message.channel.send('Lütfen Kayıt Kanalını Etiketlermisin?')
   
  db.set(`yetkilikayıtk_${message.guild.id}`, yetkilikayıtkanalı.id)

 
  message.channel.send(`Kayıt Kanalı Başarıyla Ayarlandı; **${yetkilikayıtkanalı}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'yetkili-kayıt-kanal-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};