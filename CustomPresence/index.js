// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\

var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
assets : {
large_image : "atk",
large_text : "minfay.png"
},
buttons : [{label: "Mon Twitter", url: "https://www.twitter.com/mxnfxy1"}, {label: "Discord Prélude", url: "https://discord.gg/F65vCxypdp"}]
}
})
})
client.login({ clientId : "807972318047109150" }).catch(console.error);

// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
// DiscordRichPresence developed by Minfay \\
