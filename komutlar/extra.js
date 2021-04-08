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
.setTitle("**  »Koyuncu Mustafa Dayı **")
.setThumbnail("https://media.discordapp.net/attachments/814901535242453063/815242361076318228/SoggyContentCurassow-small.gif")
.setDescription(` 

Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-rol-ver]→ Etiketlediniz kullanıcıya rol verir.
> [-rol-al] → Etiketlediğin kişden rol alır.
> [-anket]  → Anket yaparsınız.
> [-rololuştur]→ Rol oluşturur.
> [-id] → İstediğin bi kişinin ID sini alır.
> [-kanal-id] → Etiketlediğin kanalın ID sini atar.
> [-davet-oluştur] → Etiketlediğin kanalın ID sini atar.
> [-oy-kick]  → Oylama yaparak bir kişiyi sunucudan atar.
> [-hesapla] → Matamatik işlemi yapar.
> [-davet-sıralaması ] → Sunucuda yapılan davetleri sıralar
> [-iltifat] → Etiketlediğin kişiye bot iltifat eder.
> [-nick] → Etiketlediğin kişinin ismini değiştirir.
> [-tekerleme] → Tekerleme yazar.
> [-ilgincbilgi] → İlginç bilgi yazar.
> [-desteaç] → Zula deste açar.
> [-soygunyap] → Vurgun yapmaya hazırmısın? :D


Nitrosuz emoji kullanmaya hazırmısın! oku bakalım

Kullanımı çok basit, "rank" isimli bir haraketli emojiniz var diyelim 
bir kullanıcı :ran: yazarsa otomatik olarak mesajı silip emojiyi mesajla beraber yollar
eğer mesajın içinde :ran: yazıyorsa mesajın içine replace atıp öyle yollar
istediğiniz kadar deneyebilirsiniz

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
    name: 'extra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-extra'
};