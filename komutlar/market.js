const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); } 
  if (!args[0]) return message.reply(`Market şuan kapalı malesef :name_badge: `)
  
  if (args[0] === 'sa') {
    let Captanpara = await db.get(`para_${message.author.id}`) 
    let Captanfiyat = 100 
    
    if (Captanpara < Captanfiyat) return message.reply('Yetersiz Bakiye')
    
    db.set(`ìştebişiler_${message.author.id}`, "Aktif")
    db.add(`para_${message.author.id}`, -Captanfiyat)
    
    return message.reply(`Ürün başarıyla satın alındı!`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}