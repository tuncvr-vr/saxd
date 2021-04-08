const discord = require('discord.js')
const üretici = require('generate-password');
exports.run = async(client, message,args) => { 
let tuncvr = args[0]
if(!tuncvr) return message.author.send('Lütfen sayı olarak uzunluk belirt!')
var şifre = üretici.generate({
    length: tuncvr,
    numbers: true
});
return message.author.send (şifre)
};
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0, 
aliases: []
};
exports.help = {
name: "şifre-oluştur"
  };