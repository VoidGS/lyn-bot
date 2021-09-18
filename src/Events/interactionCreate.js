const Event = require("../Structures/Event");

module.exports = new Event("interactionCreate", (client, interaction) => {
    if (interaction.isCommand()) {
        const cmd = client.commands.find(c => c.name === interaction.commandName);

        if (cmd) cmd.run(interaction);
    }
});