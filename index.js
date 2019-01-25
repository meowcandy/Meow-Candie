const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = ".";
const hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif","https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif","https://cdn.weeb.sh/images/Hyv6uOQPZ.gif","https://cdn.weeb.sh/images/r1bAksn0W.gif","https://cdn.weeb.sh/images/rJ_slRYFZ.gif","https://cdn.weeb.sh/images/BkHA_O7v-.gif","https://cdn.weeb.sh/images/r1kC_dQPW.gif","https://cdn.weeb.sh/images/r1R3_d7v-.gif","https://cdn.weeb.sh/images/Sk2gmRZZG.gif",
"https://cdn.weeb.sh/images/BysjuO7D-.gif","https://cdn.weeb.sh/images/BJx2l0ttW.gif","https://cdn.weeb.sh/images/Sy65_OQvZ.gif"]
const faces = ['(∩ ͠°ل͜ °)⊃━☆','☞ ﾟ ͜ʖ ﾟ☞','ᖗ ◉ ᨓ ◉ ᖘ','ᕦ(ʘᴥʘ)ᕥ','(づ◉ ͜ʖ◉)づ','(づ>﹏<)づ','(☉ ͜ʖ☉)','(ง ò ʖ̯ ó )ง','ʕ ◕ ͜ʖ ◕ ʔ','ᕙ( ☉ Ꮂ ☉ )ᕗ','( ͡° ͜ʖ ͡° )','༼ つ ◕_◕ ༽つ','ಠ_ಠ','(ಥ﹏ಥ)','┬─┬ノ( º _ ºノ)','(▰˘◡˘▰)','╚(ಠ_ಠ)=┐','( ಠ ͜ʖರೃ)','┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴','¯\_(ツ)_/¯','( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)','(ง ﾟ ͜つ ﾟ)ง','( ͡°O ͜ʖ ͡°O)','ヽ༼ຈل͜ຈ༽ﾉ','(͡◔ ͜ʖ ͡◔)','( ͡ ͜ ʖ ͡ )','( ͡°Ĺ̯ ͡° )','( ͡~ ͜ʖ ͡~)','( ͜。 ͡ʖ ͜。)','( ° ͜ʖ͡°)╭∩╮','( ͡~ ͜ʖ ͡°)','ᕕ( ͡° ͜ʖ ͡°)ᕗ','( ͡ _ ͡°)ﾉ⚲ ♫','(╯ຈل͜ຈ) ╯︵ ┻━┻','( ͡° ͜ʖ ͡°)=ε✄','✺◟( ͡° ͜ʖ ͡°)◞✺','(╯ ͝° ͜ʖ͡°)╯︵ ┻━┻','┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ)','━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)','ᕙ(░ಥ╭͜ʖ╮ಥ░)━☆ﾟ.*･｡ﾟ','（╯°□°）╯︵ ( ͜。 ͡ʖ ͜。)','(∩ ͡ ° ʖ ͡ °) ⊃-(===>','︵‿︵(´ ͡༎ຶ ͜ʖ ͡༎ຶ `)︵‿︵','ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ','̿̿ ̿̿ ̿̿ ̿\'̿\'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿','̿\'̿\'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/\'̿̿ ̿ ̿ ̿ ̿ ̿'];
const Langs = ['afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'];
const rn = require('random-number')
const moment = require('moment');
const google = require('google')
const translate = require('google-translate-api');

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}

Client.on('ready', ()=>{
    console.log("tao online rồi.");
    Client.user.setGame('(˵ ͡° ͜ʖ ͡°˵)')
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "severinfo")){
        const embed = new Discord.RichEmbed();
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      let region = {
          "brazil": "Brazil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "us-central": "U.S. Central",
          "sydney": "Sydney",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe",
          "vip-us-east": "VIP U.S. East",
          "london": "London",
          "amsterdam": "Amsterdam",
          "hongkong": "Hong Kong"
      };

      var emojis;
      if (message.guild.emojis.size === 0) {
          emojis = 'None';
      } else {
          emojis = message.channel.guild.emojis.map(e => e).join(" ");
      }
  embed.setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
  .setThumbnail(message.guild.iconURL ? message.guild.iconURL : me.user.displayAvatarURL)
  .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
  .addField("ID", message.guild.id, true)
  .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("Region", region[message.guild.region], true)
  .addField("Members", message.guild.memberCount, true)
  .addField("Roles", message.guild.roles.size, true)
  .addField("Channels", message.guild.channels.size, true)
  .addField("Emojis", emojis, true)
  .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
  .addField("Default Channel", message.guild.defaultChannel, true)
  .setColor(3447003)
  message.channel.send({embed});
    }
    if(message.content.startsWith(prefix + "info")){
        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot:", `${user.bot}`, true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
    }
    
    if(message.content.startsWith(prefix + "setgame")){
        let args = message.content.slice(prefix.length).trim().split(' ');
        let command1 = args.shift().toLowerCase();
        if(!args[0]) return;
  if(args[0] === 'game') return message.reply('Please tell me a game to play!');
  setGame = args.join(" ");
  message.reply(`I am now playing \`${args}\`.`);
  Client.user.setGame(`${setGame}`);
    };
    if(message.content.startsWith(prefix + "dich")){
        let args = message.content.slice(prefix.length).trim().split(' ');
        let command = args.shift().toLowerCase();
        if (args[0] === undefined) {

            const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**Provide a language and some text for bot to translate.**\nUsage: `PREFIXX translate <language> <text>`");
        
            return message.channel.send(embed);
        
          } else {
        
            if (args[1] === undefined) {
        
              return message.channel.send('**Please give me something to translate.** `PREFIX translate <language> <text>`');
        
            } else {
        
              let transArg = args[0].toLowerCase();
        
              args = args.join(' ').slice(prefix.length);
              let translation;
        
              if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
              args = args.slice(transArg.length);
        
              translate(args, {to: transArg}).then(res => {
        
                const embed = new Discord.RichEmbed()
                .setDescription(res.text)
                .setFooter(`english -> ${transArg}`)
                .setColor(`RANDOM`);
                return message.channel.send(embed);
        
              });
        
            }
        
          }
        }

    if(message.content.startsWith(prefix + "lenny")){
        let r = rn({
            min: 0,
            max: faces.length - 1,
            integer: true
        });
        let face = faces[r];
        message.delete();
        message.channel.send(face);
    }
    if(message.content.startsWith(prefix + "search")){
        let args = message.content.slice(prefix.length).trim().split(' ');
        const embed = new Discord.RichEmbed();
    message.channel.startTyping();
    google.resultsPerPage = 1;

    google(args.join("+"), function(err, res) {
        if (err) message.reply(":no_entry_sign: **Error:** There was an issue googling that. Please try a different keyword.");

        let link = res.links[0];
        let googleThumbnail = 'https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg';
        let googleIcon = 'https://maxcdn.icons8.com/Share/icon/Logos//google_logo1600.png';

        embed.setColor(0xdb3236)
            .setAuthor(`Results for ${args.join(' ')}`, googleIcon)
            .setThumbnail(googleThumbnail)
            .addField(`**${link.title} - ${link.href}**`, link.description)

        message.channel.stopTyping(true);
        message.channel.sendEmbed(embed).catch(e => {
            message.channel.sendMessage("There was an error!\n" + e);
        });
    });
    }

    if(message.content.startsWith(prefix + "ping")){
        message.channel.send(`ping đang lag vl: ${Client.ping}ms`);
    }
    if (message.content.startsWith(prefix + "avatar")) {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      color:0x2c3e50,
      description:""+user.username+"*[link]("+ava+")*",
      image:{url:ava}
  }
  message.channel.send("", {embed});
    }
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    if(message.content.startsWith(prefix + "say")) {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);  
    }
    if (!message.guild) return;
    if (message.content.startsWith(prefix + "join")){
        if (message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(connection => {
                message.reply('ok đã vào!');
            })
            .catch(console.log);
        }else {
            message.reply('vào voice chát trước đi giáo sư!');
        }
    }

    if(message.content.startsWith(prefix + "leave")){
        if(message.guild.voiceConnection)
        message.guild.voiceConnection.disconnect()
    }

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "kick")){
        let user = message.mentions.users.first();
        if (user) {
            let member = message.guild.member(user);
            if (member) {
                member.kick('Optional reason that will display in the audit logs').then(() =>{
                    message.reply(`đã cho ${user.tag} ra đảo thành công`);
                }).catch(err =>{
                    message.reply('em không kick được nó');
                    console.error(err);
                });
            } else {
                message.reply('thằng này tao không biết!');
            }   
        } else {
            message.reply('giáo sư chưa chọn người để cho ra đảo!');
        } 


    }
    

    if (message.content.startsWith(prefix + "hug")) {
        if (!message.mentions.users.first()) return message.channel.send("Adu. Mày ôm được oxi à...");
    let r = rn({
        min: 0,
        max: hug.length - 1,
        integer: true
    });
    let image = hug[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** *đã ôm* **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(embed)
}


});


Client.login("NTMyNjE3MzQ3NjYwMjUxMTM2.DxfPyg.wdCZIkgpExcZIR2pVi1eg3jNgHY");