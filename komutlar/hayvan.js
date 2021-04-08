const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Koyuncu Mustafa Dayı  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/dmpzbMGA8a)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=812217484970557451&scope=bot&permissions=8&response_type=code)** **•
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-kedi] → Etiketlediniz kullanıcın bilgilerini gösterir.
> [-köpek] → Sosyal medyalarım. 
> [-tavşan] → Botta ne kadar komut oldunu gösterir.
> [-inek] → Botun Pingine Bakarsın. 
> [-maymun] → Bot hakkında bilgi gösterir


**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : 703985300304822293**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'hayvan', 
    description: 'hayvan gif Listesini Gösterir!',
    usage: '+hayvan'
};