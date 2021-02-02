const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = function(client, message) {

  if (message.author.id === ayarlar.adminID){
    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("Bot yeniden başlatılıyor");
        process.exit(0);
      
    });
  }
  else {
    message.reply("Hey! beni yapımcımdan başkası reboot edemez! :warning:")
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
