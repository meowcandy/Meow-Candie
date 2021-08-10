const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "`";
const says = "_";
const triggered = ["https://cdn.discordapp.com/attachments/540655675622293505/540655752600092713/ryyMcytDZ.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667240123596800/Gay.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667711517360168/giphy.gif", "https://media.giphy.com/media/kRgj0fQLxhVoA/giphy.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540669457660641280/giphy_3.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540669680663265320/giphy_4.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667766986768384/tenor.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667752038400020/tenor_1.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540670358294888450/tenor_2.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540668313127223317/Liem.jpg"]
const gay = ["https://cdn.discordapp.com/attachments/540655675622293505/540667240123596800/Gay.gif"]
const deotin = ["https://cdn.discordapp.com/attachments/540655675622293505/542541542858948608/deotin.gif"]
const cs = ["https://cdn.discordapp.com/attachments/540655675622293505/542541614023704606/tomcanhsat.gif"]
const faces = ['(∩ ͠°ل͜ °)⊃━☆','☞ ﾟ ͜ʖ ﾟ☞','ᖗ ◉ ᨓ ◉ ᖘ','ᕦ(ʘᴥʘ)ᕥ','(づ◉ ͜ʖ◉)づ','(づ>﹏<)づ','(☉ ͜ʖ☉)','(ง ò ʖ̯ ó )ง','ʕ ◕ ͜ʖ ◕ ʔ','ᕙ( ☉ Ꮂ ☉ )ᕗ','( ͡° ͜ʖ ͡° )','༼ つ ◕_◕ ༽つ','ಠ_ಠ','(ಥ﹏ಥ)','┬─┬ノ( º _ ºノ)','(▰˘◡˘▰)','╚(ಠ_ಠ)=┐','( ಠ ͜ʖರೃ)','┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴','¯\_(ツ)_/¯','( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)','(ง ﾟ ͜つ ﾟ)ง','( ͡°O ͜ʖ ͡°O)','ヽ༼ຈل͜ຈ༽ﾉ','(͡◔ ͜ʖ ͡◔)','( ͡ ͜ ʖ ͡ )','( ͡°Ĺ̯ ͡° )','( ͡~ ͜ʖ ͡~)','( ͜。 ͡ʖ ͜。)','( ° ͜ʖ͡°)╭∩╮','( ͡~ ͜ʖ ͡°)','ᕕ( ͡° ͜ʖ ͡°)ᕗ','( ͡ _ ͡°)ﾉ⚲ ♫','(╯ຈل͜ຈ) ╯︵ ┻━┻','( ͡° ͜ʖ ͡°)=ε✄','✺◟( ͡° ͜ʖ ͡°)◞✺','(╯ ͝° ͜ʖ͡°)╯︵ ┻━┻','┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ)','━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)','ᕙ(░ಥ╭͜ʖ╮ಥ░)━☆ﾟ.*･｡ﾟ','（╯°□°）╯︵ ( ͜。 ͡ʖ ͜。)','(∩ ͡ ° ʖ ͡ °) ⊃-(===>','︵‿︵(´ ͡༎ຶ ͜ʖ ͡༎ຶ `)︵‿︵','ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ','̿̿ ̿̿ ̿̿ ̿\'̿\'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿','̿\'̿\'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/\'̿̿ ̿ ̿ ̿ ̿ ̿'];
const rn = require('random-number')
const moment = require('moment');

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}

Client.on('ready', () => {
	console.log('Am back');
	Client.user.setStatus('available')
	Client.user.setPresence({
		game: {
			name: "Ấuzam Lane",
			type: "PLAYING"
		}
    })
})

Client.on('message', (message)=>{
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
		.addField("Biệt danh:", `${member.nickname !== null ? `${member.nickname}` : 'Ko biệt danh'}`, true)
		.addField("Ngày tạo:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Ngày gia nhập:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Trạng thái:", `${user.presence.status}`, true)
		.addField("Đang chơi game:", `${user.presence.game ? user.presence.game.name : 'Ko chơi gì cả'}`, true)
		.addField("Có những roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Soi theo yêu cầu của ${message.author.username}#${message.author.discriminator}`)
        message.delete();
        message.channel.send({embed});
    }
    
    if(message.content.startsWith(prefix + "quay")){
        let args = message.content.slice(prefix.length).trim().split(' ');
        let command1 = args.shift().toLowerCase();
        if(!args[0]) return;
    if(args[0] === 'game') return message.channel.send('Chơi gì bh?');
    setGame = args.join(" ");
    message.delete();
    message.channel.send(`Đang quẩy \`${args}\`.`);
    Client.user.setGame(`${setGame}`);
    };
    if(message.content.startsWith(prefix + "nghe")){
        let args = message.content.slice(prefix.length).trim().split(' ');
        let command1 = args.shift().toLowerCase();
        if(!args[0]) return;
    if(args[0] === 'game') return message.channel.send('Nghe gì bh?');
    setGame = args.join(" ");
    message.delete();
    message.channel.send(`Đang nghe \`${args}\`.`);
    Client.user.setActivity(`${setGame}`, { type: 'LISTENING' });
    };

    if(message.content.startsWith(prefix + "face")){
        let r = rn({
            min: 0,
            max: faces.length - 1,
            integer: true
        });
        let face = faces[r];
        message.delete();
        message.channel.send(face);
    }

    if(message.content.startsWith(prefix + "ping")){
        message.channel.send(`Mạng lag vc: ${Client.ping}ms`);
    }
    if (message.content.startsWith(prefix + "ava")) {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let ava = user.displayAvatarURL
    let embed = {
      color:0x2c3e50,
      description:""+user.username+" [link]("+ava+")",
      image:{url:ava}
    }
    message.delete();
    message.channel.send("", {embed});
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
                    message.reply('Không thể cản phá :<');
                    console.error(err);
                });
            } else {
                message.reply('Nani?');
            }   
        } else {
            message.reply('Chưa chọn đối tượng để ulti!!');
        }
    }

    if (message.content.startsWith(prefix + "gaylen")) {
        let r = rn({
            min: 0,
            max: gay.length - 1,
            integer: true
        });
        let image = gay[r];
        let embed = new Discord.RichEmbed()
        .setDescription(' Adu thanh niên ' + message.author + ' gáy to vãi lizz xD \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "kt")) {
        let r = rn({
            min: 0,
            max: triggered.length - 1,
            integer: true
        });
        let image = triggered[r];
        let embed = new Discord.RichEmbed()
        .setDescription('**' + message.author + '** bị triggered bởi **' + message.mentions.users.first() + '** xD \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
    }
	
    if (message.content.startsWith(prefix + "deltin")) {
        let r = rn({
            min: 0,
            max: deotin.length - 1,
            integer: true
        });
        let image = deotin[r];
        let embed = new Discord.RichEmbed()
        .setDescription(message.author + 'said: **HÁ HÁ CÓ CL BOMAY TIN NHÁ** =)) \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "cs")) {
        let r = rn({
            min: 0,
            max: cs.length - 1,
            integer: true
        });
        let image = cs[r];
        let embed = new Discord.RichEmbed()
        .setDescription('**' + message.author + '** đang gọi cảnh sát \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + 'xoa')) {
        let cont = message.content.slice(prefix.length).split(" ");
        let args = cont.slice(1);
        async function purge() {
            if (isNaN(args[0])) {
                message.channel.send('Ồ nô, mình ko biết phải xóa bao nhiêu tn cả [ví dụ: ^xoa 5 (bao gồm cả câu lệnh và các tin muốn xóa) ]');
                return;
            }
            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' đang xóa...');
            message.channel.bulkDelete(fetched)
            message.channel.send(fetched.size + ' dòng chat đã đc xóa...').then(message => message.delete(5000));
        }
        purge();
    }
    
    if (message.content.startsWith(prefix + 'ban')) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.ban({
              reason: 'cc',
            }).then(() => {
              message.reply(`đã ban ${user.tag}`);
            }).catch(err => {
              message.reply('ko ban đc');
              console.error(err);
            });
        } else {
            message.reply('éo ở trong này');
        }
        } else {
          message.reply('chưa chọn đối tượng');
        }
    }
    if (message.content.startsWith(prefix + 'help')){
        message.channel.send('Kí tự: " ` " + gaylen, deltin, cs, face, ava, info')
        message.channel.send(" Ví dụ: `om ( tag ai đó )")
    }
    let args = message.content.slice(says.length).trim().split(' ');
    let command = args.shift().toLowerCase();
	if(message.content.startsWith(says + "say")) {
		if (!message.member.roles.find("Waifu <3", "Đô đốc")) {
            message.channel.send('Oof, giáo sư ko dùng đc lệnh này :3')
            return
        }
		let say = args.join(' ');
		message.delete();
		message.channel.send(say);
	}
});
Client.login(process.env.BOT_TOKEN);
