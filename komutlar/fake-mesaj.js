const Discord = require('discord.js');
exports.run = function (client, message, args) {
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Hey! burda bi terslik var, ne yazılacağını ve kimin yazacağını düzgün seçmelisin! \n `Doğru Kullanım: s!fakemesaj <kullanici> <yazi>`!')
    
    let yazi = args.join(" ").slice(22);
    if (!yazi) return message.reply('Hey! burda bi terslik var, ne yazılacağını ve kimin yazacağını düzgün seçmelisin! \n `Doğru Kullanım: s!fakemesaj <kullanici> <yazi>`!')
    message.delete();
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fake-mesaj'],
    permLevel: 0
};
exports.help = {
    name: 'fake-mesaj',
    description: 'fake-mesaj',
    usage: 'fake-mesaj'
};