 /*
  const path = require("path");
	const Logger = require("./Logger");
 require("discordjs-activity")(this)
  */
  console.clear()
  const active = new Map();
  db = require('quick.db');
const Database = require('@replit/database');
const db2 = new Database();
const Discord = require("discord.js")
const c = require("colors")// dps irei fazer uma package para dx mais legal
const fs = require("fs")
const moment = require("moment")
moment.locale("pt-BR")
const bot = new Discord.Client()
Discord.Message.prototype.quote = async function (content, options) {
  const message_reference = {message_id: (!!content && !options ? typeof content === 'object' && content.messageID : options && options.messageID) || this.id,message_channel: this.channel.id}
  const allowed_mentions = {parse: ['users', 'roles', 'everyone'],replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention}
  const { data: parsed, files } = await Discord.APIMessage.create(this, content, options).resolveData().resolveFiles()
this.client.api.channels[this.channel.id].messages.post({data: { ...parsed, message_reference,allowed_mentions },files})
}
const {Collection} = require('discord.js');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir('./comandos', (err, files, message) => {
	if (err) console.error(err);
	let arquivojs = files.filter(f => f.split('.').pop() == 'js');
	arquivojs.forEach((f, i) => {
		let props = require(`./comandos/${f}`);
		console.log(`${c.cyan(f.split(".")[0])} Carregado.`);
		bot.commands.set(props.name, props);
   // console.log(props)
		props.aliases.forEach(alias => {
      //console.log(alias)
			bot.aliases.set(alias, props.name);
		});
	});
});
bot.on("ready", () => {
  console.log(c.yellow("["+c.green("API")+"] "+c.cyan(""+bot.user.username+"")+" Conectado no Discord."))
  bot.user.setActivity({name: "Olá vagalibundinhos, cm seis ai vao????", type: "WATCHING"})
})
bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type == "dm") return;

let prefix = "c."


let messageArray = message.content.split(' ');
let command = messageArray[0];
	if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);

	const comando = args.shift().toLowerCase();
	let ops = {active: active};
	let arquivocmd = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
  
if(arquivocmd){
  try{
  arquivocmd.run(bot, message, args, prefix)
  } catch(error){
    return message.channel.send("erro \n\n" + error)
  }
}else{
  return message.reply("ops, o comando nao existe")
}
})
bot.login(process.env.token)
