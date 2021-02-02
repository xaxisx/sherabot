const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Bu komutu kullanmak için yeterli yetkiye sahip değilsiniz!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`:warning: Silinecek mesaj sayısını belirtmediniz!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (args[0] > 500) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Ne yazık ki 500'den fazla mesaj silemem.`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
     .setAuthor("Shera")
      .setColor("BLACK")
      .addField(`Sohbet`, `<@${message.author.id}>` , `adlı yetkili tarafından` , args[0] , `kadar mesaj havaya uçuruldu :rocket:`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed).then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: "temizle",
  description: "temizle",
  usage: "temizle"
};