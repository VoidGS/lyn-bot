console.clear();

const Client = require("./Structures/Client");
const Command = require("./Structures/Command");
const config = require("./Data/config.json");
const client = new Client();
const fs = require("fs");

fs.readdirSync("./src/Commands").filter(file => file.endsWith(".js")).forEach(file => {

    /**
     * @type {Command}
     */
    const command = require(`./Commands/${file}`);
    console.log(`Command ${command.name} loaded`);
    client.commands.set(command.name, command);

});

require("dotenv").config();

client.on("ready", () => {
    console.log("Bot is online!");
});

client.on("messageCreate", message => {

    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.substring(config.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return;

    command.run(message, args, client);

});

client.login(process.env.TOKEN);