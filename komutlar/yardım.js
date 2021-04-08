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

Bir komut hakkında detaylı __yardım için__: **-yardım**`)

.addField('**• Komutlar**')
.addField('<a:agako:811563436743458826> kullanıcı ',' Kullanıcı komutları')
.addField('<a:agako:811563436743458826> moderasyon ',' → Moderasyon komutları')
.addField('<a:agako:811563436743458826> aboneyardım ',' → Ayarlamalı Abone Rol Sistemi')
.addField('<a:agako:811563436743458826> eğlence','  → Eğlence Komutları')
.addField('<a:agako:811563436743458826> eğlence2','  → Eğlence 2 Komutları')
.addField('<a:agako:811563436743458826> logo ',' → Logo Komutları')
.addField('<a:agako:811563436743458826> extra ',' → extra komutları l')
.addField('<a:agako:811563436743458826> şablonlar ',' → sunucu şablonları atar')
.addField('<a:agako:811563436743458826> botlist-yardım ',' → botlist komutlarını atar ')
.addField('<a:agako:811563436743458826> kayıt-yardım ',' → kayıt sisremi komutlarını atar <a:wowwww:811133049479102494> ')
.addField('<a:agako:811563436743458826> prefix ',' → prefix değiştirirsin <a:wowwww:811133049479102494> ')
.addField('<a:agako:811563436743458826> moderasyon2 ',' → moderasyon komutları 2 !! ')
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
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: ''
};