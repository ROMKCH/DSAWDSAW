module.exports = {
    name: 'unmute',
    description: "Unmute a member",
    execute(client, message, args){
        if(message.member.permissions.has("MUTE_MEMBERS"));
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`)
        } else{
            message.channel.send('I couldnt find that member.');
        }
    }
}