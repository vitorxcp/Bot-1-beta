module.exports = {
  name: "eval",
  desc: "Execute comandos ou crie.",
  perms: "Fundador",
  aliases: ["e", "evales", "execute"],
  run: async (bot,message,args) => {
    const Discord = require("discord.js")
    let {ids} = require("../database/creators/userid.json")
if(ids.includes(message.author.id) === false) return message.reply("Ops, apenas pessoas autorizadas podem acessar este comando!")
    try{
    if(!args[0]) return message.quote("<@"+message.author+">, por favor, me forneça um codigo ai, namoralzinha mermão...")
    evales = eval(args.join(" "))
     if (typeof evales !== 'string')
            evales = require('util').inspect(evales, { depth: 0 });
            embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTimestamp()
            .setTitle("> **Executando**")
            .setDescription("```js\n"+evales+"\n```")
            message.quote(embed)
  }catch(err){
    embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setTitle("> **Error `404`**")
    .setDescription("```js\n"+err+"\n```")
    message.quote(embed)
  }
  }
}