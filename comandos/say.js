module.exports = {
  name: "say",
  desc: "Falando em `1`, `2`, `3`.",
  perms: "Gerenciar Mensagem",
   aliases: ["falar"],
   run: async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGE"))return message.reply("Eee, pelo visto você não tem certas permissões rapaz...")


if(!args[0])return message.reply("Vish, como assim, oque eu vou falar? hum...")

if(message.mentions.channels.first()){

  if(!args[1]){
return message.channel.send(""+args.join(" ")+"")
}

message.reply("A mensagem foi enviada para o chat <#"+ message.mentions.channels.first()+">")
  return message.mentions.channels.first().send(""+args.slice(1).join(" ")+"")
} else{ 
  return message.channel.send(""+args.join(" ")+"")
}
  
}} 