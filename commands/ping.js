module.exports = {
    name: 'ping',
    description: "This command will give you a answer",
    execute(client, message, args) {

        if(message.member.roles.cache.get("963253896459976704")){
            message.channel.send('Pong!');


        } else {
            message.channel.send('You dont have the permission to use this command');
        }


    }
}