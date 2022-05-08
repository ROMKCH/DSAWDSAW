module.exports = async (client) =>{
    const guild = client.guilds.cache.get('722954843135803474');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('965067143462936596');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count...');
    }, 5000);
}