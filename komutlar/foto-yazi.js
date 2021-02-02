const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const yaziii = args.slice(0).join(' '); 
  if(!yaziii) return message.channel.send(`Herhangi bir yazı belirtmediniz!`)
  const yazı = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yaziii}`
  
  const embed = new Discord.RichEmbed()
  .setImage(yazı)
  .setAuthor(`Shera`)
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
name: 'foto-yazi',
description: 'qwe',
usage: 'foto-yazi'
}
