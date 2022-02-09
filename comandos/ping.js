module.exports = {
  name: "ping",
  desc: "Veja como esta a minha latencia.",
  perms: "°",
   aliases: ["latencia"],
   run: async (bot, message, args) => {
  message.reply("latencia aproximada: `"+bot.ws.ping+"`ms.")
}
}
