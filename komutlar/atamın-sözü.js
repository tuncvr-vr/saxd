const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
   "yurtta sulh, cihanda sulh.",
  "Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez",
    "Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.",
    "Hayatta en hakiki mürşit ilimdir.",
    "Egemenlik verilmez, alınır.",
    "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.",
    "Gençler cesaretimizi takviye ve idame eden sizlersiniz. Siz, almakta olduğunuz terbiye ve irfan ile insanlık ve medeniyetin, vatan sevgisinin, fikir hürriyetinin en kıymetli timsali olacaksınız. Yükselen yeni nesil, istikbal sizsiniz. Cumhuriyeti biz kurduk, onu yükseltecek ve yaşatacak sizsiniz",
    "Bir ulusun asker ordusu ne kadar güçlü olursa olsun, kazandığı zafer ne kadar yüce olursa olsun, bir ulus ilim ordusuna sahip değilse, savaş meydanlarında kazanılmış zaferlerin sonu olacaktır. Bu nedenle bir an önce büyük, mükemmel bir ilim ordusuna sahip olma zorunluluğu vardır."
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

     var resim = [
      "https://media.discordapp.net/attachments/812962554572832769/814533670148112405/dsx16FSdx0aU2hjFXXo0xw.jpg?width=956&height=676",
      "https://cdn.discordapp.com/attachments/812962554572832769/814533635842506802/6l4EV482kkeUqRLPGznoYQ.jpg",
      "https://cdn.discordapp.com/attachments/812962554572832769/814533612711575562/iRbJ4szuzk2mTboC8wjhyA.jpg",
      "https://media.discordapp.net/attachments/812962554572832769/814533591161110588/oOZMLxuK-EKTlQiqCO6aUg.jpg?width=901&height=676"
        ] 
        var görsel = resim[Math.floor(Math.random() * (resim.length))]  
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RED")
.setThumbnail(`${görsel}`)
.setTitle("Atam diyorki!:")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aykut-elmas"],
  permLevel: 0
};

exports.help = {
  name: "atamın-sözü"
};