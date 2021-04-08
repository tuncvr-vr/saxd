const db = require("quick.db");
const fetch = require("node-fetch");
 
exports.run = async (client, message, args) => {
  var siteck = await fetch("http://newsapi.org/v2/top-headlines?country=tr&apiKey=c3e2429af5534e48b2278773081ab7d3");
  var bilgi = await siteck.json();
  var page = 0;
  var embed = new Discord.RichEmbed()
                       .setColor("RANDOM")
                       .setDescription(`
                       [**Kaynak**](${bilgi.articles[0].url})
                       **Yazan:** ${bilgi.articles[0].author}
                       **Başlık:** ${bilgi.articles[0].title}
                       **Açıklama:** ${bilgi.articles[0].description}`)
                       .setThumbnail(bilgi.articles[0].urlToImage)
                       .setFooter(`Sayfa ${page} / ${bilgi.articles.length}`)
  message.channel.send(embed).then(async msg => {
    await msg.react("⬅")
    await msg.react("➡")
 
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 900000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 900000 });
forwards.on('collect', async (reaction, user) => {
        if(page === bilgi.articles.length) return;
        page++;
        embed.setDescription(`
                       [**Kaynak**](${bilgi.articles[page-1].url})
                       **Yazan:** ${bilgi.articles[page-1].author}
                       **Başlık:** ${bilgi.articles[page-1].title}
                       **Açıklama:** ${bilgi.articles[page-1].description}]`);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${bilgi.articles.length}`)
        embed.setThumbnail(bilgi.articles[page-1].urlToImage)
        msg.edit(embed)
      })
      backwards.on('collect', async (reaction, user) => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(`
                       [**Kaynak**](${bilgi.articles[page+1].url})
                       **Yazan:** ${bilgi.articles[page+1].author}
                       **Başlık:** ${bilgi.articles[page+1].title}
                       **Açıklama:** ${bilgi.articles[page+1].description}]`);
        embed.setFooter(`Sayfa ${page} / ${bilgi.articles.length}`)
        embed.setThumbnail(bilgi.articles[page+1].urlToImage)
        msg.edit(embed)
      })
 
  })
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "haber",
  useage: "!haber"
};