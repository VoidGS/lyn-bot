/** @format **/

const Command = require("../Structures/Command");

module.exports = new Command({
    name: "ping",
    description: "Ping pong!",
    async run(message, args, client) {

        message.reply(`Ping: ${client.ws.ping} ms.`);

    }
});