module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        const channel = '965067711082299422';
        const minecraftUpdatesRole = message.guild.roles.cache.find(role => role.name === "Minecraft Updates");
        const BotUpdatesRole = message.guild.roles.cache.find(role => role.name === "Bot Updates");
 
        const grassblockEmoji = '<:grassblock:965073717023637544>';
        const settingsEmoji = '<:settings:965073678805114950>';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a announcement!')
            .setDescription('Choosing a announcement will always keep you updated! \n\n'
                + `${grassblockEmoji} for minecraft updates\n`
                + `${settingsEmoji} for bot updates`);
 
        let messageEmbed = await message.channel.send({embeds: [embed]}) 
        messageEmbed.react(grassblockEmoji);
        messageEmbed.react(settingsEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === grassblockEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftUpdatesRole);
                }
                if (reaction.emoji.name === settingsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(BotUpdatesRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === grassblockEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftUpdatesRole);
                }
                if (reaction.emoji.name === settingsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(BotUpdatesRole);
                }
            } else {
                return;
            }

        });

    }
 
}   
