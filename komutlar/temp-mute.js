const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

var mutelirolu = "Muted from Shera"

module.exports.run = async (bot, message, args) => {

  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply(`:x: Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  if(mutekisi.id === '751763346495111179') return message.reply(`:warning: Yapımcıma mute atamassın! \nDoğru kullanım; \`s!mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  if(mutekisi.hasPermission("MANAGE_MESSAGES")) return message.reply(`:warning: Yetkisi olan birisini muteleyemem! \nDoğru Kullanım; \`s!mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  let muterol = message.guild.roles.find(`name`, mutelirolu);
  if(!muterol){
    try{
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`:warning: Lütfen zamanı doğru belirtiniz. \nDoğru Kullanım; \`s!mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)

  await(mutekisi.addRole(muterol.id));
  message.reply(`<@${mutekisi.id}> adlı kullanıcı ${message.author.username} tarafından ${args[1]} süresi boyunca mutelendi!`);

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`<@${mutekisi.id}> adlı kullanıcının mutesi sona erdi.`);
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "temp-mute",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
    usage: "temp-mute <@kullanıcı> <1sn/1dk/1sa/1g>"
  };
