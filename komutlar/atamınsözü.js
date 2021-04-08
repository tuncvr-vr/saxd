const Discord = require('discord.js');

exports.run = (client, message, params) => {

    var sans = ["Yurtta sulh, cihanda sulh!", "Ey yükselen yeni nesil, istikbal sizindir. Cumhuriyet'i biz kurduk, O'nu yükseltecek ve sürdürecek sizlersiniz.", "Ne mutlu Türküm diyene!", "Hayatta en hakiki mürşit ilimdir.", "Egemenlik verilmez, alınır.", "Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.", "Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez", "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.", "Vuruşa Vuruşa Ölmeyi Tercih Ederiz!"];

    var sonuc = sans[Math.floor((Math.random() * sans.length))];

    const embed = new Discord.RichEmbed()

    .addField(`Atatürk sözleri: `, `${sonuc}`)

    .setTimestamp()

    return message.channel.sendEmbed(embed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'atatürk-sözleri',

  description: 'Atatürk ün sözlerini gönderir',

  usage: 'atatürk-sözleri'

};