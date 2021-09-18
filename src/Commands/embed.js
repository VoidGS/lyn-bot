/** @format **/

const Command = require("../Structures/Command");

const Discord = require("discord.js");

module.exports = new Command({
    name: "embed",
    description: "Shows an embed!",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        const embed = new Discord.MessageEmbed();

        let description = [];
        description[0] = "this is a random message";
        description[1] = "don't worry about this pls";
        description[2] = "my name is lyn";

        // embed.setTitle("Test")
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setDescription(description.join("\n"))
            .setColor("AQUA")
            // .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setTimestamp(message.createdTimestamp)
            .setImage(message.author.avatarURL({ dynamic: true }))
            .addFields(
                {
                    name: "Field one",
                    value: "1.0.0",
                    inline: true
                },
                {
                    name: "Field two",
                    value: "2.0.0",
                    inline: true
                }
            );

        message.reply({ embeds: [embed] });

    }
});