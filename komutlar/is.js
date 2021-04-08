const Discord = require("discord.js");
const os = require("os");
require("moment-duration-format");
const moment = require("moment");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("**__Ping__**",`<a:ping:814799772329312256> Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n <a:ping:814799772329312256> Bot Gecikmesi: ${client.ws.ping}ms`, true)
    .addField("**__Kullanıcı Sayısı__** ", ` <a:7724_losecontrol:815249283128361020> ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("**__Sunucu Sayısı__**", `<:joinserver:815249172557987860> ${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("**__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)
    .addField("**__Aktiflik__**", `<a:online:814803745975304192> ${payidarzaman}`, true)
    .addField("**__Node.JS Versiyon__**", `<a:node:814804693095940106> ${process.version}`, true)
    .addField("**__Ram Kullanımı__**", `<:RAM:814801966986821652> ${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField("**__Discord.JS__**", `<a:parti:811563463251198032> ${Discord.version}`, true)
    .addField("**__Konum__**", `Turkey :flag_tr:`, true)
    .addField("**__Bot Sahibi__**", `<:owner:814803771929657359> tuncvr`, true)
    .addField("**__Geliştirici__**", `<:owner:814803771929657359> tuncvr`, true)
    .addField("**__İşletim Sistemi__**", ` \`Windows 10 | 64 Bit\` `, true)
    .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("**__Komut sayısı__**`", `\`${client.commands.size}\``,true)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['is'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "is",
  usage: "is"
};
