const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
  if (!prefix) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Prefix zaten ayarlanmamış!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Prefix başarıyla sıfırlandı!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  db.delete(`prefix_${message.guild.id}`)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};
