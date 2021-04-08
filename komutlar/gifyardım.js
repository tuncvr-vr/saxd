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
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/dmpzbMGA8a)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=812217484970557451&scope=bot&permissions=0)** **•
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-NSFW] → NSFW gifler.
> -Woman → Kadın gif xd
> -Man → erkek gif xd
> -Baby → bebek gif xd
> -gifara → gif ararsınız
> [-hayvan] → Hayvan gifleri.
> [-kemalsunal] → **Kemal Sunal** gifleri.

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
    name: 'gifyardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};