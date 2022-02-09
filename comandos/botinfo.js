module.exports = {
name: "botinfo",
  desc: "Veja as informações do Bot.",
  perms: "°",
aliases: ["about", "info"],
run: async (bot,message,args) => {
const Discord = require("discord.js")
embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTimestamp()
.setThumbnail(bot.user.avatarURL())
.setTitle("**Minhas Infomações:**")
.addField("**Versão Bot**", "**`v0.0.0`.**")
.addField("**Lib Usada**", "**`discord.js`**")
.addField("**Lib Versão**", "**`"+Discord.version+"`**")
.addField("**Users**", "**`"
+bot.users.cache.size.toLocaleString()+"`**")
.addField("**Guilds**", "**`"+bot.guilds.cache.size.toLocaleString()+"`**")
message.quote("<@"+message.author+">", embed)
}
}