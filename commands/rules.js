module.exports = {
    name: 'rules',
    description: "Embeds",
    execute(client, message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
        .setColor('#45bbff')
        .setTitle('Rules')
        .setURL('')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: '1. Play Nice, ', value: 'Rude or malicious behavior will lead to a mute or a ban. No one likes a party pooper.'},
            {name: '2. Use common sense,  ', value: 'Use the proper channel for the topic.'},
            {name: '3. No Spamming, ', value: 'Spam is for eating, not posting. Dont spam unless you want to spam in the spam Channel!'},
            {name: '4. No external links or Discord invites ', value: 'Just no.'},
            {name: '5. No advertisement or promotion, ', value: 'Dont ask the Admins for free promotions, unless you are active enough to get a promotion.'},
            {name: '6. Please be patient when asking for help, ', value: 'We try our best but people may not always be online, or they may be helping others first.'},
            {name: '8. Using Resource Packs,', value: 'If you use Resource Packs such as X-ray and stuff like that, you will get banned.'},
            {name: '9. Be respectful,', value: 'Being respectful towards others will make people feel welcome.'},
            {name: '10. Posting NSFW,', value: 'Aint no one I allowed to post and sort of NSFW anything thats considered 18+ Such as porn, nudity etc.'},
        )

        message.reply({ embeds: [newEmbed] });
    }

}