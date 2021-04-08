const Discord = require('discord.js');
exports.run = async (client, message) => {
  var karakterler = [
"shely",
"brock",
"colt",
"8bit",
"nita",
"EMZ",
"Jessie",
"Bo",
"Dynamike",
"Tick",
"Bull",
"El Primo",
"rosa",
"poco",
"barley",
"Jacky",
"Rico",
"Carl",
"Darrly",
"Penny",
"Bibi",
"Piper",
"Nani",
"Bea",
"Frank",
"Pam",
"Edgar",
"Max",
"Mortis",
"Mr. P",
"Sprout",
"Tara",
"Gene",
"Byron",
"Amber",
"Leon",
"Crow",
"Spike",
"Sandy",
"Colette",
"Surge",
"Lou",
"Colonel Ruffs"
   
    ]  
  var karakterler = karakterler[Math.floor(Math.random(1) * karakterler.length)]
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username} ın Kutusu;`, message.author.avatarURL())
    .setImage('https://media0.giphy.com/media/JOdQKwcV985Ip2ezWh/giphy.gif')
    .setDescription(`
\`\`\`
Kutudan Çıkan Karakter = ${karakterler}
\`\`\`
`)
  .setFooter(`Kutuyu açan (${message.author.username}) Unutma Bunlar Sadece Bir Simülatör Gerçek hesabına Gelmez`)
    message.channel.send(embed);
  }
 
 
exports.conf = {
  aliases: ['jsal']
}
exports.help = {
  name: "kutuaç"
}