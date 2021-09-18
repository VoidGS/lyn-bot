/** @format **/

const Command = require("../Structures/Command");

module.exports = new Command({
    name: "clear",
    description: "Clear an amount of messages!",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client) {

        const amount = args[1];

        if (!amount || isNaN(amount)) return message.reply(`${amount == undefined ? "**Nothing**" : amount} is not a valid number!`);

        const amoudParsed = parseInt(amount);

        if (amoudParsed > 100) return message.reply("You cannot clear more than 100 messages!");

        message.channel.bulkDelete(amoudParsed);

        const msg = await message.channel.send(`Cleared ${amoudParsed} messages!`);

        setTimeout(() => {
            msg.delete()
        }, 5000);

    }
});