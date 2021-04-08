const Discord = require('discord.js');

function error1(message, s) {
return message.channel.send(new Discord.MessageEmbed()
.setColor('#2c2f33')
.setTitle('Üzgünüm!')
.setDescription(s));
};

function error2(message, s, d) {
return message.channel.send(new Discord.MessageEmbed()
.setColor('#2c2f33')
.setTitle('Üzgünüm!')
.setImage(d)
.setTimestamp()
.setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
.setDescription(s));

};
exports.run = async (client, message, args) => {
if(!args[0]) return error1(message, 'Lütfen geçerli bi site giriniz, <@!'+message.author.id+'>!');
const puppeteer = require("puppeteer");
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.setViewport({
  width: 1280,
  height: 800
})

await page.goto(args[0])
await page.screenshot({
  path: 'pixelien.png'
}).then(m => {
message.channel.send(new Discord.MessageAttachment(m, 'asd.png'))
});

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sitebak'],
  permLevel: 0
};
 
exports.help = {//Pixelien
  name: 'ss'//Jkood
};//CodeWork