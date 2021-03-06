const Event = require("../Structures/Event");

module.exports = new Event("messageCreate", (client, message) => {
    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.substring(client.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return;

    const permission = message.member.permissions.has(command.permission);

    if (!permission) return message.reply(`You don't have the permission \`${command.permission}\` to run this command`)

    command.run(message, args, client);
});