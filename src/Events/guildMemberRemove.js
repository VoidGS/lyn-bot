const Event = require("../Structures/Event");

const Discord = require("discord.js");

module.exports = new Event("guildMemberRemove", (client, member) => {
    
    const channel = member.guild.channels.cache.find(c => c.name == "mindmap");

    if (!channel) return;

    const embed = new Discord.MessageEmbed();

    embed.setTitle("Member Left")
        .setColor("RED")
        .setAuthor(member.user.tag)
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
        .addFields(
            {
                name: "Account Created",
                value: member.user.createdAt.toUTCString(),
                inline: true
            },
            {
                name: "User Joined",
                value: member.joinedAt.toUTCString(),
                inline: true
            }
        )
        .setTimestamp();

    channel.send({ embeds: [embed] });

});