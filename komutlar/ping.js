const Discord = require('discord.js');

exports.run = async(client, message) => {

let Pixelien = new Discord.MessageEmbed()
.setColor("#2c2f33")
.addField("**__Gecikme Sürem__**", `<a:ping:814799772329312256> **${client.ws.ping}** ms Olarak Hesaplandı.`,true)

message.channel.send(Pixelien)

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };