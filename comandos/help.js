module.exports = {
  name:"help",
  desc:"Veja oque eu posso fazer.",
  perms:"°",
  aliases: ["ajuda", "commands", "comandos", "cmds"],
  run: async(bot,message,args, prefix) => {
    const Discord = require("discord.js")
    if(!args[0]) {
      for (y = 0; y < 10; y++){
     embed = new Discord.MessageEmbed()
     .setColor("BLACk")
     .setTimestamp()
     .setTitle("> **Meus Comandos.**")
     .setDescription(""+bot.commands.map(a => " <a:seta:887513411519385610> `"+prefix+""+a.name+"` - **"+bot.commands.get(a.name).desc+"**\n").join(" ")+"")
     .setFooter("Mais informações: "+prefix+"help < cmd >.")
      return message.quote(embed)
    }
    }
    cmds = args[0]
 if(!bot.commands.get(cmds)) cmds = bot.aliases.get(args[0])
 if(!bot.commands.get(cmds)) return message.quote("<@"+message.author+">, Apenas mais um comando inexistente para mim.")
 perms = bot.commands.get(cmds).perms
 if(perms === "°") perms = "Nenhuma Permissão Necessária."
aliases = bot.commands.get(cmds).aliases.map(a => "**`"+a+"`**").join(" **|** ")
if(aliases === "") aliases = "Nenhuma Aliase."
name = bot.commands.get(cmds).name
desc = bot.commands.get(cmds).desc
embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTimestamp()
.setTitle("> **Informações do Comando `"+name+".`**")
.addField("**Descrição**", "**"+desc+"**")
.addField("**Permissões**", "**[`"+perms+"`]**")
.addField("**Sinimos**", aliases)
message.quote(embed)
  }
}