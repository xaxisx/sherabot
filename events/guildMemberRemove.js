module.exports = member => {
  let guild = member.guild;
  member.send('Keşke sunucudan gitmeseydin dostum!');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};