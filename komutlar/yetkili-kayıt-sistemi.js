const Discord = require ("discord.js");
exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()


.setColor("RANDOM")
.setTitle("**  » Koyuncu Mustafa Dayı**") 
.setThumbnail("https://media.discordapp.net/attachments/814901535242453063/815242361076318228/SoggyContentCurassow-small.gif")
.setDescription(`

Bir komut hakkında detaylı __yardım için__: **yardım**`)

.addField('**• Komutlar**')
.addField('<a:agako:811563436743458826> yetkili-kayıt-kanal-ayarla #kanal ',' Üyelerin Kayıt Olacağı Kanal')
.addField('<a:agako:811563436743458826> yetkili-kayıt-log-ayarla #kanal',' → Üyeler Kayıt Olunca Bildirim Yollanan Kanal')
.addField('<a:agako:811563436743458826> yetkili-giriş-mesajı #kanal',' → Belirtilen Kanala Giriş Mesajı Yollar')
.addField('<a:agako:811563436743458826> kayıt-yetkili-rol-ayarla @rol','  → Kullanıcıyı Kayıt Edecek Olan Rol')
.addField('<a:agako:811563436743458826> kayıt-erkek-rol-ayarla @rol','  → Kayıt Olan Erkek Üyeye Verilecek Rol')
.addField('<a:agako:811563436743458826> kayıt-kadın-rol-ayarla @rol ',' → Kayıt Olan Kadın Üyeye Verilecek Rol')
.addField('<a:agako:811563436743458826> yetkili-kayıt-alınacak-rol-ayarla @rol ',' → Kayıt Olan Kullanıcıdan Alınacak Rol')
.addField('<a:agako:811563436743458826> kayıt-stats | kayıt-stats @kullanıcı',' → Kullanıcının Kaç Kişiyi Kayıt Ettiğini Gösterir')
.addField('<a:agako:811563436743458826> erkek',' → Erkek kişiyi kayıt edersiniz ')
.addField('<a:agako:811563436743458826> kız ',' → kız kişiyi kayıt edersiniz ')
.addField("**__Gecikme Sürem__**", `<a:ping:814799772329312256> **${client.ws.ping}** ms Olarak Hesaplandı.`,true)
return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kayıt-yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: ''
};