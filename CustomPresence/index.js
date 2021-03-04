var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
assets : {
large_image : "image name",
large_text : "large text"
},
buttons : [{label: "Button name 1", url: "Url 1"}, {label: "Button name 2", url: "Url 2"}]
}
})
})
client.login({ clientId : "" }).catch(console.error);
