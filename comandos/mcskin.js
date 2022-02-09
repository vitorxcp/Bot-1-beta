module.exports = {
name: "mcskin",
aliases: ["skin"],
run: async (bot, message ,args) => {
  const m = require("megamc")
const Discord = require("discord.js")
if(!args[0]) return message.reply("Você esqueceu de me fornecer um nickname ai né rapaz...")
let skin = await m.bodymc(""+args[0]+"")
if(skin === "https://crafatar.com/renders/body/undefined?size=512&default=MHF_Steve&overlay&scale=10.png") return message.reply("Opa, que nickname e este!? de quem ele é!?")
nickname = await   m.bodymc(""+args[0]+"")
embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setTimestamp()
.setTitle("**Skin de `"+nickname+"`**")
.setDescription("**Baixe a imagem [aqui]("+skin+").**")
.setImage(skin)
message.quote("<@"+message.author+">", embed)
  } 
}
//.................................................................................................................................................................
