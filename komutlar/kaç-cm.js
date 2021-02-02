const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Senin malafatını ölçüyorum aga dur.').then(message => {
   var espriler = ['Ideal 18CM kurtarır reis. :eggplant: ' ,'Git bi doktora görün 11CM ne amk? :eggplant:' ,'32CM en iyi hazzı yaşatır  :eggplant:' ,'Aga sana her kız düşer 35CM nedir ya? :ok_hand: :eggplant:' ,'Bizim 12 yaşındaki çocukdan bile küçük 5CM nedir hacı? :carrot:' ,'Fırat boru sponsorluğu ile 65CM malafat, tebrikler! :eggplant:' ,'Şişman çocuk çükü gibi 5CM :eggplant:' ,'Aga nabtın 31CM ?!?! :eggplant:' ,'Aga valla kılpayı kurtulmuşsun yine iyi ya 14CM :eggplant:' ,'Seni anan doğurmamış sıçmış  1CM  :croissant: '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaç-cm',
  description: 'Malafatını Söyler.',
  usage: 'kaç-cm'
};