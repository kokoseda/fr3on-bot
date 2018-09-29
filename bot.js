sage => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);





    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }


});
var prefix = "*";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var 丕賵賳乇 = message.guild.owner
        var 丕毓囟丕亍 = message.guild.memberCount
        var 丕賷丿賷 = message.guild.id
        var 亘賱丿丕賱爻賷乇賮乇 = message.guild.region
        var 丕賱乇賵賲丕鬲 = message.guild.channels.size
        var 丕賱乇鬲亘 = message.guild.roles
        var 毓賲賱 = message.guild.createdAt
        var 丕賱乇賵賲 = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('丕爻賲 丕賱爻賷乇賮乇', servername)
        .addField('丕賷 丿賷 丕賱爻賷乇賮乇 ' , [丕賷丿賷])
        .addField('兀毓囟丕亍 丕賱爻賷乇賮乇', 丕毓囟丕亍)
        .addField('乇賵賲丕鬲 丕賱爻賷乇賮乇', 丕賱乇賵賲丕鬲)
        .addField('乇賵賲 丕賱卮丕鬲 丕賱兀爻丕爻賷', 丕賱乇賵賲)
        .addField('氐丕丨亘 丕賱爻賷乇賮乇', 丕賵賳乇)
        .addField('亘賱丿 丕賱爻賷乇賮乇', 亘賱丿丕賱爻賷乇賮乇)
        .addField('鬲丕乇賷禺 丕賮鬲鬲丕丨 丕賱爻賷乇賮乇', 毓賲賱)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('鈿� | **賱賷爻 賱丿賷賰 氐賱丕丨賷丕鬲**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | 鬲賭賭賲",
        color: 0x06DF00,
        description: "鬲賲 賲爻丨 丕賱乇爻丕卅賱 亘賳噩丕丨",
        footer: {
          text: "Desert Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('ready',  () => {
  console.log('By : i1Suhaib');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '*bc') {
         message.react("鉁旓笍")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('鬲賲 丕賱丕乇爻丕賱 亘賵丕爻胤丞 :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**鈼� Sender  :**', `*** 鈫� ${message.author.username}#${message.author.discriminator}***`)
            .addField('***鈼� Server  :***', `*** 鈫� ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('賾', args)
            m.send(``,{embed: bc});
        });
    }
})
    client.on('message', message => {
     if (message.content === "*id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("賲毓賱賵賲丕鬲 毓賳 丕賱丨賭賭爻丕亘")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("丕爻賭賭賭賲 丕賱丨爻賭賭丕亘", `${message.author.username}`)
  .addField('賰賵丿 丕賱丨爻丕亘 丕賱禺丕氐', message.author.discriminator)
  .addField("丕賱乇賯賭賭賭賲 丕賱卮賭賭賭禺氐賷", message.author.id)
  .addField('亘賭賭賭賭賵鬲', message.author.bot)
  .addField("鬲丕乇賷禺 丕賱鬲爻噩賷賱", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** 賷賲賳毓 賳卮乇 丕賱乇賵丕亘胤 ! **`)
    }
});
client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === "*help") {
message.reply("**Done | 鬲賭賭賲**")
message.reply("**鬲賲 丕乇爻丕賱 丕賵丕賲乇 丕賱亘賵鬲 賮賷 丕賱禺丕氐**")
message.react("馃摡")

}
});
client.on('message', message => {
     if (message.content === "*bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ON ${client.guilds.size} Servers - Prefix *help`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
const secreT = [
  "**丕賱丨賷丕丞 亘賰賱 賲丕 賮賷賴丕 鬲賯賮 丿丕卅賲賸丕 毓賱賶 丨丿 丕賱賵爻胤賷丞 亘賷賳 丕鬲夭丕賳 丕賱賲毓賳賶 賵囟丿賴 賲賳 丨亘 賵賰乇賴 賵丨賯 賵亘丕胤賱 賵毓丿賱 賵馗賱賲**.",
  "**賰賶 鬲毓賷卮 毓賱賷賰 丕賳 鬲鬲賯賳 賮賳 丕賱鬲噩丕賴賱 亘丕丨鬲乇丕賮**.",
  "**賱丕 鬲丨夭賳 毓賱賶 賲賳 丕卮毓乇賰 亘丕賳 胤賷亘鬲賰 睾亘丕亍 丕賲丕賲 賵賯丕丨鬲賴**.",
  "**賴賳丕賰 賲賳 賷丨賱賲 亘丕賱賳噩丕丨 賵賴賳丕賰 賲賳 賷爻鬲賷賯馗 亘丕賰乇丕 賱鬲丨賯賷賯賴**.",
  "**丕賳 鬲毓丕賱噩 兀賱賲賰 亘賳賮爻賰 鬲賱賰 賴賶 丕賱賯賵丞**.", 
  "**丕賱噩賲賷毓 賷爻賲毓 賲丕 鬲賯賵賱 賵丕賱丕氐丿賯丕亍 賷賳氐鬲賵賳 賱賲丕 鬲賯賵賱 賵丕賮囟賱 丕賱丕氐丿賯丕亍 賷賳氐鬲賵賳 賱賲丕 丕禺賮丕賴 爻賰賵鬲賰**.", 
  "**丕賳鬲賴賶 夭賲賳 丕賱賮乇賵爻賷丞 貙 賱賲 鬲賳賯乇囟 丕賱禺賷賵賱 亘賱 丕賳賯乇囟 丕賱賮乇爻丕賳**.", 
  "**丕賳 鬲賰賵賳 丕禺乇爻丕 毓丕賯賱丕 禺賷乇 賲賳 丕賳 鬲賰賵賳 賳胤賵賯丕 噩賴賵賱丕**.", 
  "**丕賱賲賳丕賯卮丕鬲 丕賱毓賯賷賲丞 賱丕 鬲賳噩亘 丕賮賰丕乇丕**.", 
  "**賳丨賳 賳賰鬲亘 賲丕 賱丕 賳爻鬲胤賷毓 丕賳 賳賯賵賱 賵賲丕 賳乇賷丿 丕賳 賷賰賵賳**.", 
  "**賳丨賳 賳賰鬲亘 賲丕 賱丕 賳爻鬲胤賷毓 丕賳 賳賯賵賱 賵賲丕 賳乇賷丿 丕賳 賷賰賵賳**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("禺賵丕胤乇")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Desert Bot' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
   if (message.content.startsWith("id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.login("NDk0ODY2NjU3MjExMzE4Mjcz.DpFn8Q.qxuCYg9ySuBMN1iHY39LleHoXjI");
