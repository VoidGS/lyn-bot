/** @format **/

const Command = require("../Structures/Command");

module.exports = new Command({
    name: "ping",
    description: "Ping pong!",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        message.reply(`Ping: ${client.ws.ping} ms.`);

    }
});