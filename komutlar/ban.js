const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
  

    
  if (!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return message.reply('Gerekli izin yok')


  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (message.mentions.users.size < 1) return message.reply('Lütfen banlamak istediğiniz üyeyi etiketleyin.');
  if (reason.length < 1) return message.reply('Lütfen sebep giriniz');
  if (user.id === message.author.id) return message.reply('Kendinimi banlayacaksın?');
  
  message.guild.ban(user, 2);
  
  const embed2 = new Discord.RichEmbed()
 .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban atma')
    .addField('Kullanıcı adı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  message.channel.send(embed2)
    
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 3,
    kategori: "moderasyon",
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
 
};