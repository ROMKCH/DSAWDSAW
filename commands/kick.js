module.exports = {
    name: 'kick',
    description: "Kick a member",
    execute(client, message, args) {
        if(message.member.permissions.has("KICK_MEMBERS"));
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You couldnt kick that member');
        }
    }
}