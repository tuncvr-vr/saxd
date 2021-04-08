const Discord = require("discord.js");
const youthanasia = require("quick.db");

exports.run = async (client, message, args) => {
    const codare = message;
    const Rifleman = new Discord.MessageEmbed();

    const newerror = err => {
        codare.channel.send(Rifleman 
            .setColor('RED')
            .setDescription(err)
            .setFooter(`${codare.author.tag} tarafından kullanıldı.`, codare.author.displayAvatarURL({ dynamic: true }))
        );
    };

    if (!codare.member.hasPermission('MANAGE_GUILD')) return newerror('Bu komudu kullanabilmen için **SUNUCUYU YÖNET** yetkisine sahip olmalısın.');
    
    const option = args[0];
    if (!option) return newerror('Bir seçenek belirtmen gerekiyor:\n\`!isimreklamkoruma <aç | kapat>\`');
    switch (option) {
        case 'aç':
            if (youthanasia.has(`isimreklamkoruma.${codare.guild.id}`)) return newerror('İsim reklam koruma sistemi zaten açık.');
            youthanasia.set(`isimreklamkoruma.${codare.guild.id}`, 'açık');
            codare.channel.send(Rifleman.setColor('GREEN').setDescription('İsim reklam koruma sistemini açtım.'));
            break;
        case 'kapat':
            if (!youthanasia.has(`isimreklamkoruma.${codare.guild.id}`)) return newerror('İsim reklam koruma sistemi zaten kapalı.');
            youthanasia.delete(`isimreklamkoruma.${codare.guild.id}`);
            codare.channel.send(Rifleman.setColor('GREEN').setDescription('İsim reklam koruma sistemini kapattım.'));
            break; 
        default:
            newerror('Bir seçenek belirtmen gerekiyor:\n\`-isimreklamkoruma <aç | kapat>\`');
            break;
    };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isimreklamkoruma'],
  permLevel: 0
};
exports.help = {
  name: "isim-reklam-koruma"
};
 