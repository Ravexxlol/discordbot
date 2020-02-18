const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NjQzNDA5NTEyMDE5MjYzNDg5.Xku8mg.zB0b-Si9etED7K6q3GQI5VDTOpc"
const PREFIX = "$";
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
let prefix = PREFIX

bot.on("message", (message) => {
  if (message.content.startsWith === "$rave") {
      message.reply("$kick @Jutska#3687");
  }});

////////////////////////////////////////
bot.on('message', message => {
 
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1)
  let prefix = PREFIX

if(cmd === `${prefix}report`){



module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  return;
}
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let reason = args.join(" ").slice(22);


  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channels.find(`name`, "report-log");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
return;
}

module.exports.help = {
name: "report"
}});

////////////77



bot.on("ready", () =>{
    console.log("We all hate Mozart!");
});

bot.on('message', msg => {
  if (msg.content === '$rave') {
      return msg.channel.send('$kick @Jutska#3687');
  }
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});
bot.on('message', message => {

    if (!message.guild) return;
    if (message.content.startsWith(PREFIX + 'kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Successfully kicked nooba ${user.tag}`);
          }).catch(err => {
            message.reply('I was unable to kick the member, he is my lord');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You want to kick invisible Mozarts?');
      }
    }
  });
bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case "help" :
      const help = new Discord.RichEmbed()
      .setTitle("MozartTrash bot")
      .addField("Word Mozart", "Dont use it, you can get banned")
      .addField("Commands", " $help and $kick, $report")
      .setColor("#f42g32")
       message.channel.sendEmbed(help)
       break;
}});

bot.on("ready", () => {

  bot.user.setPresence({
      status: "online",
      game: {
          name: "We Hate Mozart"
      }
  }); 
});
module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}

/////////////////////////////////////////////7
bot.on('message', message => {
  async function declaredAsAsync() {
 
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1)
  let prefix = PREFIX

if(cmd === `${prefix}kick`){

  if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
  

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("Please mention a valid member of this server");
  if(!member.kickable) 
    return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
  

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
 
  await member.kick(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

}}});

/////////////////////////////////////////////////////////////////////////////
bot.on('message', message => {
  async function declaredAsAsync() {
 
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1)
  let prefix = PREFIX

if(cmd === `${prefix}ban`){

  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
  
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Please mention a valid member of this server");
  if(!member.bannable) 
    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  
  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);

}}});

////////////////////////////////////////////////////////////////////////////////////////////

bot.login(token);
