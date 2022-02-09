module.exports = {
name: "mccape",
  desc: "Veja a capa de um jogador de minecraft original.",
  perms: "°",
aliases: ["cape", "capa"],
run: async (bot, message ,args) => {
  const m = require("megamc")
const Discord = require("discord.js")
if(!args[0]) return message.reply("Você esqueceu de me fornecer um nickname ai né rapaz...")
let skin = await m.capemc(""+args[0]+"")
if(skin === "https://crafatar.com/capes/undefined?size=512&scale=10.png") return message.reply("Opa, que nickname e este!? de quem ele é!?")
nickname = await args[0]
embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setTimestamp()
.setTitle("**Capa de `"+nickname+"`**")
.setDescription("**Baixe a imagem [aqui]("+skin+").**")
.setImage(skin)
message.quote("<@"+message.author+">", embed)
  } 
}
