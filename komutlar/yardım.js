
const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0xFF0000)
      .setAuthor(`Shera`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`
**Shera Yardım Komutları**

**Eğlence için komutlar;**
s!ascii <yazi> - Istediğiniz yazıyı bir foto-yazı'ya çevirebilirsiniz.
s!emojiyazı <yazi> - Istediğiniz yazıyı emojilerle bota yazdırtabilirsiniz.
s!nsfw - +18 videolar izleyebilirsiniz. 
s!kaç-cm - Malafatınızın boyunu söyler.
s!foto-yazi <yazi> - Resim olarak bota fontlu bişey yazdırabilirsiniz.
s!fake-mesaj <kullanici> <yazi> - İstediğiniz kişiye bir yazıyı **fake** olarak yazdırtabilirsiniz.
**Daha fazla eğlence komudu eklenecektir!**

**Moderasyon için komutlar;**
s!ban <@kullanıcı> <sebep> - İstediğiniz kişiyi banlayabilirsiniz.
s!unban <@kullanıcı> <sebep> - İstediğiniz kişiyi banlayabilirsiniz.
s!kick <@kullanıcı> <sebep> - İstediğiniz kişiyi sunucudan atabilirsiniz.
s!temp-mute <@kullanıcı> <1sn/1dk/1sa/1g> - İstediğiniz kişiye süreli mute atabilirsiniz.
s!yaz <yazi> - İstediğiniz yazıyı bota yazdırabilirsiniz.
s!oyla <konu> - İstediğiniz bir konu hakkında oylama başlatabilirsiniz.
s!davet-kur - Sunucunuzun davet linkini açar ve size verir.
s!temizle  - En fazla 500 olmak üzere geçmişteki yazıları silebilirsiniz.
**Daha fazla Moderasyon komudu eklenecektir!**

[Botumu discord sunucuna ekle!](https://discord.com/oauth2/authorize?client_id=770606509935689738&scope=bot&permissions=8)
`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };


