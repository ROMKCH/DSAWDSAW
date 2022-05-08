const util = require('minecraft-server-util');
 
module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
    execute(client, message, args, Discord){
        if(!args[0]) return message.channels.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channels.send('Please enter a minecraft server port');
 

        util.status(args[0], parseInt(args[1])).then((response) =>{
            console.log(response.host);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                    {name: 'Minecraft IP', value: `${response.host}`},
                    {name: 'Online Players', value: `${response.onlinePlayers}`},
                    {name: 'Max Players', value: `${response.maxPlayers}`},
                    {name: 'Version', value: `${response.version}`},
                );
 
            message.reply({ embeds: [embed] });
        })
        .catch ((error) =>{
            message.channel.send(error);
            throw error;
        });
    }
}