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
.setTitle("**  »KMD botlist**") 
.setThumbnail("https://media.discordapp.net/attachments/814901535242453063/815242361076318228/SoggyContentCurassow-small.gif")
.setDescription(`

Bir komut hakkında detaylı __yardım için__: **-yardım**`)

.addField('**• Komutlar**')
.addField('<a:agako:811563436743458826> -bot-ekle','bot eklersiniz')
.addField('<a:agako:811563436743458826> -bot-kuralları',' bot kurallarını atar')
.addField('<a:agako:811563436743458826> -bot-onayla',' bot onaylarsın ')
.addField('<a:agako:811563436743458826> -bot-reddet',' bot reddedersin')
.addField('<a:agako:811563436743458826> -botlist-ayar',' yetkili vb ayarını yaparsın')
.addField("**__Gecikme Sürem__**", ` **${client.ws.ping}** ms Olarak Hesaplandı.`,true)
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
    name: 'botlist-yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: ''
};