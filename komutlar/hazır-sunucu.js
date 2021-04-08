exports.run = async (client, message, args) => {
let guildName = args[0];
if (!guildName) return message.channel.send("Oluşturmamı istediğiniz sunucunun adını girin")
const Guild = await client.guilds.create(guildName, {
          channels: [
              {"name": "davet-kanal", "topic": "Burası davet kanalıdır."},
          ]
      });

      const GuildChannel = Guild.channels.cache.find(channel => channel.name == "davet-kanal");
      const Invite = await GuildChannel.createInvite({maxAge: 0, unique: true, reason: "Yeni Sunucu."})

      message.channel.send(`Sunucu oluşturuldu. Davet Kodu: ${Invite.url}`);
}

exports.conf = {
    aliases: ["sunucu-kur"]
}

exports.help = {
    name: "hazır-sunucu",
    description: "Bota sunucu oluşturtursunuz.",
    usage: "hazır-sunucu <sunucu-adı>"
}