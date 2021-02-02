module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Dostum,sunucuya hoşgeldin **' + username + '** eğlenebileceğini düşünüyorum.');
};
