const Event = require("../Structures/Event");

module.exports = new Event("ready", (client) => {
    console.log("Bot is online!");
});