/** @format **/

const Command = require("../Structures/Command");

const Discord = require("discord.js");

module.exports = new Command({
    name: "embed",
    description: "Shows an embed!",
    async run(message, args, client) {

        const embed = new Discord.MessageEmbed();

        embed.setTitle("Test")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setDescription("this is a random message\ndon't worry about this pls")
            .setColor("AQUA")
            .setThumbnail(client.user.avatarURL({ dynamic: true }));

        message.reply({ embeds: [embed] });

    }
});