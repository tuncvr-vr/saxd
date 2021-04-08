const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**<a:no1:814445405604675616> Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  if (!message.guild) {
    const CrewCode = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "⚠ **Uyarı** ⚠",
        "`<a:no1:814445405604675616>  rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(CrewCode);
  }
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embedCrewCode = new Discord.MessageEmbed()
      .setDescription("```<a:no1:814445405604675616> Ne yazık ki bu komutu kullanmaya yetkin yok. <a:no1:814445405604675616> ```")
      .setColor("BLACK");
 
    message.channel.send(embedCrewCode);
    return;
  }
 
  let guild = message.guild;
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first();

  if (!user)
    return message
      .reply("**⚠ Rol verebilmek icin kullanıcının ismini ve verilecek rölü yazmalısın! ⚠ **")
      .catch(console.error);

  user.roles.add(rol);
  const CrewCode = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `<a:groguonay:811133055192399892> Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`
    )
    .setFooter("Captan Bot");
  message.channel.send(CrewCode);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};
 //Crew Code
exports.help = {
  name: "rol-ver",
  description: "İstediğiniz kişiyi istediğiniz rolü verir.",
  usage: "rol-ver [kullanıcı] [@rol]"
};