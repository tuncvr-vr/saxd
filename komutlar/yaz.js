const Discord = require('discord.js');

exports.run = (client, message, args) => {  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam İçin 1 Mesaj Yaz.');
  message.delete();  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 4
};

exports.help = {
  name: 'yaz',
 category: "admin komutları",
  description: 'bota 1 aded masaj yazdırır',
  usage: 'yaz [MESAJ]'
};