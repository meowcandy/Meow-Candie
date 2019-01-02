const Discord = require('discord.js')
const yt = require('ytdl-core');
const tokens = require('./tokens.json');
const bot = new Discord.Client()

let queue = {};

const commands = {
	'gay': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`thêm bài hát vào danh sách ${tokens.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('đang gáy');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage('Ko đc gáy nữa r :<').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Gáy: **${song.title}** theo yêu cầu của: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(tokens.prefix + 'dung')) {
					msg.channel.sendMessage('tạm dừng').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(tokens.prefix + 'tiep')){
					msg.channel.sendMessage('tiếp tục').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(tokens.prefix + 'skip')){
					msg.channel.sendMessage('đã skip').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(tokens.prefix + 'time')){
					msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'j': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Chui vào kênh voice trước đi giáo sư :V');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
			msg.reply("Oke đã zo")
		});
	},
	'cut': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			voiceChannel.leave().then(disconnect => resolve(disconnect)).catch(err => reject(err));
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`bạn phải add link video YouTube hoặc ID ${tokens.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('link YouTube không hợp lệ: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`đã thêm **${info.title}** vào danh sách`);
		});
	},
	'list': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`thêm vào danh sách ${tokens.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - được yêu cầu bởi: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name} danh sách nhạc:**__ hiện tại **${tosend.length}** bài hát ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	'help': (msg) => {
		let tosend = ['```xl','CHỨC NĂNG GÁY', tokens.prefix + 'j : "vào voice"',tokens.prefix + 'cut : "rời khỏi kênh"',	tokens.prefix + 'them : "thêm link YouTube vào danh sách"', tokens.prefix + 'list : "hiển thị danh sách,hiển thị max 15 bài."', tokens.prefix + 'gay : "Gáy lên"', '', 'CÁC LỆNH KHI ĐANG PHÁT NHẠC:'.toUpperCase(), tokens.prefix + 'dung : "tạm dừng"',	tokens.prefix + 'tiep : "tiếp tục"', tokens.prefix + 'skip : "bỏ qua"', tokens.prefix + 'time : "thời gian đang phát bài hát."',	'volume+(+++) : "tăng âm lượng 2%/+"',	'volume-(---) : "Giảm âm lượng 2%/-"',
		'CÁC LỆNH KHÁC', tokens.prefix + 'say : "bot nói"', tokens.prefix + 'lenny : "( ͡° ʖ̯ ͡°)"','```'];
		msg.channel.sendMessage(tosend.join('\n'));
    },
};
bot.on('ready', ()=>{
    console.log("Ai am back!");
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Toi co don :<',
            type: "LISTENING"
        }
    })
});   
bot.on('message', (message)=>{
    if (!msg.guild) return;
    if (msg.content.startsWith(prefix + "j")){
        if (msg.member.voiceChannel){
            msg.member.voiceChannel.join()
            .then(connection => {
                msg.reply('Oke đã chui zo');
            })
            .catch(console.log);
        }else {
            msg.reply('vào voice trước đi giáo sư ơi :V');
        }
    }
    if (msg.content.startsWith(prefix + "avatar")) {
        let user = msg.mentions.users.first() || message.author;
        let embed = new Discord.RichEmbed()
        .setAuthor(`${user.tag}`)
        .setImage(user.avatarURL)
        .setColor("RANDOM")
        msg.channel.send(embed)
    }
    if(msg.content.startsWith(prefix + "leave")){
        if(msg.guild.voiceConnection)
        msg.guild.voiceConnection.disconnect();
    }
    let args = msg.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    if(msg.content.startsWith(prefix + "say")) {
        let say = args.join(' ')
        msg.delete();
        msg.channel.send(say);
    }
    if(msg.content.startsWith(prefix + "kick")){
        let user = msg.mentions.users.first();
        if(user) {
            let member = msg.guild.member(user);
            if(member) {
                member.kick('Opsional reason that will display in audit log').then(() => {
                    msg.reply(`Bay màu-ed, press F to tưởng nhớ ${user.tag}`);
                }).catch(err => {
                    msg.reply('Không thể cản phá :<');
                    console.error(err);
                });
            }else{
                msg.reply("Ai thế nhỉ? :V")
            }
        }else{
            msg.reply('Chưa chọn đối tượng để ulti');
        }
    }
    if(msg.content.startsWith(prefix + "lenny")){
        msg.delete();
        msg.channel.send("( ͡° ʖ̯ ͡°)")
    }
})

bot.login(process.env.BOT_TOKEN);
