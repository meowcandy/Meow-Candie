const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

var config = JSON.parse(fs.readFileSync('./setting.json', 'utf-8'));

const yt_api_key = config.yt_api_key;
const bot_controller = config.bot_controller;
const prefix = config.prefix;
const discord_token = config.discord_token;

var queue = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];

var guilds = {};

client.login(process.env.discord_token);

client.on('message', function (message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(" ");

    if (mess.startsWith(prefix + "p")){
        if (queue.length > 0 || isPlaying) {
            getID(args, function (id) {
                add_to_queue(id)
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    message.delete();
                    message.channel.send(" Gáy: **" + videoInfo.title + "**")
                });
            });
        }else{
            isPlaying = true;
            getID(args, function(id){
                queue.push("placeholder");
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    queueNames.push(videoInfo.title);
                    message.channel.send(" Gáy: **" + videoInfo.title + "**")
                });
            });
        }
    } else if (mess.startsWith(prefix + "skip")) {
                skip_song(message);
                message.channel.send("Đã skip")
    }
});
client.on('ready', () => {
	console.log('Am back');
	client.user.setStatus('available')
	client.user.setPresence({
		game: {
			name: 'Toi co don',
			type: "LISTENING"
		}
    })
});


function skip_song(message) {
    dispatcher.end();
    if(queue.length > 1) {
        playMusic(queue[0]. message)
    } else {
        skipReq = 0
        skippers = [];
    }
}

function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;

    voiceChannel.join().then(function (connection){
        stream = ytdl("https://www.youtube.com/watch?v=" + id,{
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];

        dispatcher = connection.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            } else {
                setTimeout(function () {
                    playMusic(queue[0], message);
                }, 100);
            }
        });
    })
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYouTubeID(str));
    }else{
        search_video(str, function (id) {
            cb(id);
        });
    }
}

function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYouTubeID(strID));
    }else{
        queue.push(strID);
    }
}

function search_video(query, callback) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        if (!json.items) callback("3_-a9nVZYjk");
        else {
            callback(json.items.id.videoID);
        }
    });
}

function isYoutube(str) {
    return str.toLowerCase().indexOf("youtube.com") > -1;
}

client.on('message', message => {
	if (message.content.startsWith(prefix + "ava")) {
        let user = message.mentions.users.first() || message.author;
        let embed = new Discord.RichEmbed()
        .setAuthor(`${user.tag}`)
        .setImage(user.avatarURL)
        .setColor('RANDOM')
        message.channel.send(embed)
	}
	if(message.content.startsWith(prefix + "lenny sad")){
		message.delete();
		message.channel.send("( ͡° ʖ̯ ͡°)");
	}
	if(message.content.startsWith(prefix + "lenny dam")){
		message.delete();
		message.channel.send("(˵ ͡° ͜ʖ ͡°˵)");
    }
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
	if(message.content.startsWith(prefix + "say")) {
		let say = args.join(' ');
		message.delete();
		message.channel.send(say);
	};
	if(message.content.startsWith(prefix + "kick")) {
		let user = message.mentions.users.first();
        if (user) {
            let member = message.guild.member(user);
            if (member) {
                member.kick('Optional reason that will display in the audit logs').then(() =>{
                    message.reply(`đã cho ${user.tag} ra đảo `);
                }).catch(err =>{
                    message.reply('Không thể cản phá :<');
                    console.error(err);
                });
            } else {
                message.reply('Ai thế nhỉ? :V');
            }   
        } else {
            message.reply('Giáo sư chưa chọn đối tượng để ulti :V');
        };
});
