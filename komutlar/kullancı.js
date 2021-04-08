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
.setTitle("**  » Koyuncu Mustafa Dayı  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`

Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [ilet](https://discord.gg/qzHTkhjQgT) → Yapımcıma yazdığınız yazıyı iletir!.**Boş yere kullanmayın!!!**
> [aşk-ölç](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişinin aşkını ölcer <3 .
> [kullanıcı-bilgi](https://discord.gg/qzHTkhjQgT) → Etiketlediniz kullanıcın bilgilerini gösterir.
> [medya](https://discord.gg/qzHTkhjQgT) → Sosyal medyalarım. 
> [toplamkomut](https://discord.gg/qzHTkhjQgT) → Botta ne kadar komut oldunu gösterir.
> [avatar](https://discord.gg/qzHTkhjQgT) → avatarını gösterir
> [yetkilerim](https://discord.gg/qzHTkhjQgT) → Hangi yetkilere sahip olduğunuzu gösterir.
> [profil](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişini profilini görürsünüz.
> [sunucuresmi](https://discord.gg/qzHTkhjQgT) → Sunucu resmini gösterir.
> [ping](https://discord.gg/qzHTkhjQgT) → Botun Pingine Bakarsın. 
> [davet](https://discord.gg/qzHTkhjQgT) → beni sunucuna ekle.

`)
 

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
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kullanıcı'
};