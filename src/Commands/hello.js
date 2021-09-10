/** @format **/

const Command = require("../Structures/Command");

module.exports = new Command({
    name: "hello",
    description: "Hello!",
    async run(message, args, client) {

        message.reply("Hello");

    }
});