const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "^";
const hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif","https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif", "https://cdn.weeb.sh/images/Hyv6uOQPZ.gif", "https://cdn.weeb.sh/images/r1bAksn0W.gif", "https://cdn.weeb.sh/images/rJ_slRYFZ.gif", "https://cdn.weeb.sh/images/BkHA_O7v-.gif", "https://cdn.weeb.sh/images/r1kC_dQPW.gif", "https://cdn.weeb.sh/images/r1R3_d7v-.gif", "https://cdn.weeb.sh/images/Sk2gmRZZG.gif", "https://cdn.weeb.sh/images/BysjuO7D-.gif", 
"https://cdn.weeb.sh/images/BJx2l0ttW.gif","https://cdn.weeb.sh/images/Sy65_OQvZ.gif", "https://cdn.weeb.sh/images/Sk80wyhqz.gif", "https://cdn.weeb.sh/images/Sk-xxs3C-.gif", "https://cdn.weeb.sh/images/S1OAduQwZ.gif", "https://cdn.weeb.sh/images/S18oOuQw-.gif", "https://cdn.weeb.sh/images/ryg2dd7wW.gif", "https://cdn.weeb.sh/images/SknauOQwb.gif", "https://cdn.weeb.sh/images/ryPix0Ft-.gif", "https://cdn.weeb.sh/images/B11CDkhqM.gif", "https://cdn.weeb.sh/images/Sk80wyhqz.gif", "https://cdn.weeb.sh/images/BkZngAYtb.gif", "https://cdn.weeb.sh/images/BkkgL8mDW.gif", "https://cdn.weeb.sh/images/Hkknfs2Ab.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542855823127478282/1.gif", "https://cdn.weeb.sh/images/rkV6r56Oz.gif"]
const pat = ["https://cdn.weeb.sh/images/ByDVw9uO-.png", "https://cdn.weeb.sh/images/ryXj1JKDb.gif", "https://cdn.weeb.sh/images/ByZwv5udZ.gif", "https://cdn.weeb.sh/images/BkaRWA4CZ.gif", "https://cdn.weeb.sh/images/Sk2f7J39G.gif", "https://cdn.weeb.sh/images/ByZ7wqOu-.png", "https://cdn.weeb.sh/images/B1SOzCV0W.gif", "https://cdn.weeb.sh/images/r1Y5L6NCZ.gif", "https://cdn.weeb.sh/images/rJavp1KVM.gif", "https://cdn.weeb.sh/images/HyWlxJFvb.gif", "https://cdn.weeb.sh/images/ByOc1ktv-.gif", "https://cdn.weeb.sh/images/B1TQcTNCZ.gif", "https://cdn.weeb.sh/images/H1MBvc_u-.gif", "https://cdn.weeb.sh/images/rkBZkRttW.gif", "https://cdn.weeb.sh/images/HJRIlihCZ.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180401821515786/29.gif"]
const lick = ["https://cdn.weeb.sh/images/ryGpGsnAZ.gif", "https://cdn.weeb.sh/images/H1EJxR_vZ.gif", "https://cdn.weeb.sh/images/H1zlgRuvZ.gif", "https://cdn.weeb.sh/images/rktygCOD-.gif", "https://cdn.weeb.sh/images/rJ6hrQr6-.gif", "https://cdn.weeb.sh/images/H13HS7S6-.gif", "https://cdn.weeb.sh/images/Sk15iVlOf.gif", "https://cdn.weeb.sh/images/rykRHmB6W.gif", "https://cdn.weeb.sh/images/BkvTBQHaZ.gif", "https://cdn.weeb.sh/images/Bkxge0uPW.gif", "https://cdn.discordapp.com/attachments/537169976637784064/539977703223459861/liem.gif", "https://cdn.weeb.sh/images/Hkknfs2Ab.gif"]
const bad = ["https://cdn.weeb.sh/images/H16aQJFvb.gif", "https://media.giphy.com/media/ryxGBGURsirNC/giphy.gif", "https://cdn.weeb.sh/images/H1eoWIDdb.gif", "https://cdn.weeb.sh/images/Bk_oZUP_-.gif", "https://cdn.weeb.sh/images/HkZ6v0FOb.gif", "https://cdn.weeb.sh/images/HkHFyIw_W.gif", "https://cdn.weeb.sh/images/ByIcZUPuZ.gif", "https://cdn.weeb.sh/images/BJsi-8vd-.gif", "https://cdn.weeb.sh/images/S1yhZ8vuW.gif", "https://cdn.weeb.sh/images/H1n57yYP-.gif", "https://cdn.weeb.sh/images/HkHFyIw_W.gif", "https://cdn.weeb.sh/images/H1n57yYP-.gif", "https://cdn.weeb.sh/images/By2iXyFw-.gif"]
const tat = ["https://cdn.weeb.sh/images/rknn7Jtv-.gif","https://cdn.weeb.sh/images/HkK2mkYPZ.gif", "https://cdn.weeb.sh/images/Sk0RmyYvb.gif", "https://cdn.weeb.sh/images/SkdyfWCSf.gif", "https://cdn.weeb.sh/images/B1-nQyFDb.gif", "https://cdn.weeb.sh/images/rJ4141YDZ.gif", "https://cdn.weeb.sh/images/Hk6JVkFPb.gif", "https://cdn.weeb.sh/images/r1PXzRYtZ.gif", "https://cdn.weeb.sh/images/ByHUMRNR-.gif", "https://cdn.weeb.sh/images/rJrnXJYPb.gif", "https://cdn.weeb.sh/images/Hy09QJFDZ.gif", "https://cdn.weeb.sh/images/rJvR71KPb.gif", "https://cdn.weeb.sh/images/Bkj-oaV0Z.gif", "https://cdn.weeb.sh/images/BJ8o71tD-.gif", "https://cdn.weeb.sh/images/rJgTQ1tvb.gif", "https://cdn.weeb.sh/images/BJLCX1Kw-.gif", 
"https://cdn.weeb.sh/images/ry2tWxcyf.gif", "https://cdn.weeb.sh/images/SkSCyl5yz.gif", "https://cdn.weeb.sh/images/HkJ6-e91z.gif", "https://cdn.weeb.sh/images/rkpAXa5bG.gif", "https://cdn.weeb.sh/images/HkHFyIw_W.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180374663397380/28.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180341297709066/27.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180319801901066/26.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180305423826964/25.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180290714402816/24.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180175400534034/20.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180153850331139/19.gif"]
const kiss = ["https://cdn.weeb.sh/images/r1H42advb.gif", "https://cdn.weeb.sh/images/HJmunTOw-.gif", "https://cdn.weeb.sh/images/BJMX2TuPb.gif", "https://cdn.weeb.sh/images/Byh57gqkz.gif", "https://cdn.weeb.sh/images/S1E1npuvb.gif", "https://cdn.weeb.sh/images/rJ6PWohA-.gif", "https://cdn.weeb.sh/images/HJYghpOP-.gif", "https://cdn.weeb.sh/images/Sksk4l51z.gif", "https://cdn.weeb.sh/images/SyY0j6Ov-.gif", "https://cdn.weeb.sh/images/S1qZksSXG.gif", "https://cdn.weeb.sh/images/Bkk_hpdv-.gif", "https://cdn.weeb.sh/images/B1MJ2aODb.gif"]
const triggered = ["https://cdn.discordapp.com/attachments/540655675622293505/540655752600092713/ryyMcytDZ.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667240123596800/Gay.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667711517360168/giphy.gif", "https://media.giphy.com/media/kRgj0fQLxhVoA/giphy.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540669457660641280/giphy_3.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540669680663265320/giphy_4.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667766986768384/tenor.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667752038400020/tenor_1.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540670358294888450/tenor_2.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540668313127223317/Liem.jpg"]
const gay = ["https://cdn.discordapp.com/attachments/540655675622293505/540667240123596800/Gay.gif"]
const poke = ["https://cdn.weeb.sh/images/H1x2HxyYD-.gif", "https://cdn.weeb.sh/images/HkxwlkKPb.gif", "https://cdn.weeb.sh/images/rJ0hlsnR-.gif", "https://cdn.weeb.sh/images/B14SJlTQG.gif", "https://cdn.weeb.sh/images/Hk2HekKD-.gif", "https://cdn.weeb.sh/images/SyQzRaFFb.gif", "https://cdn.weeb.sh/images/rkaUe1YPb.gif", "https://cdn.weeb.sh/images/SyJzRTKFW.gif", "https://cdn.weeb.sh/images/rkeaUeJKD-.gif", "https://cdn.weeb.sh/images/SydLxJFwW.gif", "https://cdn.weeb.sh/images/H1fMRpYtb.gif", "https://cdn.weeb.sh/images/rktSlkKvb.gif", "https://cdn.weeb.sh/images/r1v6xoh0Z.gif", "https://cdn.weeb.sh/images/rkB8eJYPZ.gif", "https://cdn.weeb.sh/images/B1oSgytwW.gif", "https://cdn.weeb.sh/images/rJzUe1FwZ.gif", "https://cdn.weeb.sh/images/HJZpLxkKDb.gif", "https://cdn.weeb.sh/images/HkjjLb0rM.gif", "https://cdn.weeb.sh/images/Sk_rl1Kw-.gif"]
const bite = ["https://cdn.discordapp.com/attachments/540655675622293505/542179268118052869/01.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542179284312129537/02.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542179303958249492/03.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542179319892672542/04.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542179888249962497/05.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542179923012616202/06.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542179934559273001/07.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542179981862764554/09.jpg", 
"https://cdn.discordapp.com/attachments/540655675622293505/542179999625773076/10.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180010383900673/11.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542180028520202260/12.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180044148310026/13.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542180066994552832/14.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180078197538826/15.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542180111533867030/17.jpg", "https://cdn.discordapp.com/attachments/540655675622293505/542180133533122570/18.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180200079818770/21.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542180213367242782/22.gif", "https://cdn.discordapp.com/attachments/540655675622293505/542577138037948456/1.png"]
const deotin = ["https://cdn.discordapp.com/attachments/540655675622293505/542541542858948608/deotin.gif"]
const cs = ["https://cdn.discordapp.com/attachments/540655675622293505/542541614023704606/tomcanhsat.gif"]
const khoanhkhac = ["https://cdn.discordapp.com/attachments/537169976637784064/544477732415995935/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/544229694028120084/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/543953502142201858/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/543909293037191168/unknown.png", "https://media.discordapp.net/attachments/523147982959280170/539125817444139038/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/543006414361329664/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/542779669057896468/unknown.png", 
"https://cdn.discordapp.com/attachments/537169976637784064/542245221422071819/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/541323083831574529/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/540250844658925569/unknown.png", "https://cdn.discordapp.com/attachments/537169976637784064/539709726691164161/unknown.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551168332791809/0.png","https://cdn.discordapp.com/attachments/540655675622293505/544551181121355777/1.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551204622172170/2.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551210917822475/3.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551217607737345/4.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551227523072041/5.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551236557471754/6.png", 
"https://cdn.discordapp.com/attachments/540655675622293505/544551246497841158/7.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551256471896075/8.png", "https://cdn.discordapp.com/attachments/540655675622293505/544551266098085910/9.png","https://cdn.discordapp.com/attachments/540655675622293505/544771222248882196/1.png", "https://cdn.discordapp.com/attachments/540655675622293505/544771225709445120/2.png", "https://cdn.discordapp.com/attachments/540655675622293505/544771234551037954/3.png", "https://cdn.discordapp.com/attachments/540655675622293505/544771242998235137/4.png", "https://cdn.discordapp.com/attachments/540655675622293505/544771252766638090/5.png", "https://cdn.discordapp.com/attachments/540655675622293505/544771260291219458/6.png"]
const capoo = ["https://media.giphy.com/media/7JsCieSgDMVV0SU8qR/giphy.gif","https://media.giphy.com/media/2AKMp7rqJy19DNBrl6/giphy.gif", "https://media.giphy.com/media/fQiviNdq1A3Nn86v57/giphy.gif", "https://media.giphy.com/media/2wT8KH43dZHtMQQ6gg/giphy.gif", "https://media.giphy.com/media/nlIPEYw9R5gCB3YJbK/giphy.gif", "https://media.giphy.com/media/oHx56QODls8WqsysVL/giphy.gif", "https://media.giphy.com/media/3Mhq6NQpBn40chLW0Z/giphy.gif", "https://media.giphy.com/media/5q1YxjXpjShI7cTkXH/giphy.gif", "https://media.giphy.com/media/fQDSat5WpY11d0lyeW/giphy.gif", "https://media.giphy.com/media/1n3kxYSPy7nYzAd6FS/giphy.gif", "https://media.giphy.com/media/7TkA95dunhGqxM23HC/giphy.gif", "https://media.giphy.com/media/4TkeU2rApw1gFqaLik/giphy.gif", "https://media.giphy.com/media/C9xyw3eDdtJuPPhV0Q/giphy.gif", "https://media.giphy.com/media/9P54oJc4Y05GsqTzMd/giphy.gif", "https://media.giphy.com/media/vNg23jTmRQmRLCeWmn/giphy.gif", 
"https://media.giphy.com/media/w9aB8ML9caq4ppHYcb/giphy.gif", "https://media.giphy.com/media/4KF9tEZZ99TfyAk4w5/giphy.gif", "https://media.giphy.com/media/kPCaq9RSq56MqQdrhr/giphy.gif", "https://media.giphy.com/media/2zcQUqxixP11dSBXMz/giphy.gif", "https://media.giphy.com/media/bwLCCZbUt2BbyBPunW/giphy.gif", "https://media.giphy.com/media/QNWq0TbKADX3GLDMSI/giphy.gif", "https://media.giphy.com/media/5wFHI7VVhVJFSraafy/giphy.gif", "https://media.giphy.com/media/5UxJSqJgtMdq9oZ4T6/giphy.gif", "https://media.giphy.com/media/BWnKTmSp7i27HsDKS2/giphy.gif", "https://media.giphy.com/media/Wy6Ba3pQUM8Wl9AsRD/giphy.gif", "https://media.giphy.com/media/dSeV1rwkeMS84fcyvO/giphy.gif", "https://media.giphy.com/media/PNfO763J9C6xNi5ZWd/giphy.gif", "https://media.giphy.com/media/8Pjfph5DZEVwEpUQN7/giphy.gif", "https://media.giphy.com/media/65CdzaH0Y893KZSOTj/giphy.gif", "https://media.giphy.com/media/3LKz0cpEDOQdzgkvD6/giphy.gif", 
"https://media.giphy.com/media/7JyLMbi1Ixm0d38DDL/giphy.gif", "https://media.giphy.com/media/2fI6wlwSNqwPoVALKx/giphy.gif", "https://media.giphy.com/media/vvlXRQk0HXu9TgG83y/giphy.gif", "https://media.giphy.com/media/1Ye9W562QVNAsUXfJv/giphy.gif", "https://media.giphy.com/media/2difRB7j6iOMKAxVjn/giphy.gif", "https://media.giphy.com/media/1AePOuERh4yHsHJUtR/giphy.gif", "https://media.giphy.com/media/35DluCV3Bp27HJ7BNU/giphy.gif", "https://media.giphy.com/media/2xPJgxGGREj4UU5shz/giphy.gif", "https://media.giphy.com/media/xWZ5d1qCLbntgcxwi2/giphy.gif", "https://media.giphy.com/media/24mLGmGz8RJUPcljP1/giphy.gif", "https://media.giphy.com/media/236WgL8hVG3d8exOIH/giphy.gif", "https://media.giphy.com/media/vwQkrVsHvASw2rvCyt/giphy.gif", "https://media.giphy.com/media/1BfPro40WmqCN4Wlfs/giphy.gif", "https://media.giphy.com/media/ir3tVQA3RxGzAMNHnq/giphy.gif", "https://media.giphy.com/media/pHZBKQ8sZYwx1Fn2QK/giphy.gif", 
"https://media.giphy.com/media/cC9UggEZmaCtaNHezq/giphy.gif", "https://media.giphy.com/media/2zdowXFwWHAtdeQZ6C/giphy.gif", "https://media.giphy.com/media/OqDujFd2wAAfJU74xz/giphy.gif", "https://media.giphy.com/media/1rK9I9DR5rY3pKQyfA/giphy.gif", "https://media.giphy.com/media/26kLTUJFaneYMgFJG8/giphy.gif", "https://media.giphy.com/media/oOGi0Fzq6eraw0hkJk/giphy.gif", "https://media.giphy.com/media/23gh5YFrIavyiyFhwK/giphy.gif", "https://media.giphy.com/media/jxaJRn8oMqiajgyDrY/giphy.gif", "https://media.giphy.com/media/2bW31kXZ3b9DxinVM2/giphy.gif", "https://media.giphy.com/media/1lwSkX91KGuO8TmA8A/giphy.gif", "https://media.giphy.com/media/6bbYmIyfiUqoDgS9x9/giphy.gif", "https://media.giphy.com/media/5C2gekdZ3JoIEvaDnY/giphy.gif", "https://media.giphy.com/media/1gF4XzXGQZWncTk8Gm/giphy.gif", "https://media.giphy.com/media/5yWT6kqDVF3FGo70j0/giphy.gif", "https://media.giphy.com/media/8cSTuV13lapbaXOdOZ/giphy.gif"]
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
			name: 'Love Swi',
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
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
	if(message.content.startsWith(prefix + "say")) {
		let say = args.join(' ');
		message.delete();
		message.channel.send(say);  
    }
    if (!message.guild) return;
    if (message.content.startsWith(prefix + "vao")){
        if (message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(voiceConnection => {
                message.channel.send('Đã chui zo');
            })
            .catch(console.log);
        }else{
            message.channel.send('Vào voice trc đi giáo sư :v');
        }
    }

    if(message.content.startsWith(prefix + "cut")){
        if(message.guild.voiceConnection)
        message.guild.voiceConnection.disconnect()
        message.channel.send('Đã té')
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
    if (message.content.startsWith(prefix + "hug")) {
        if (!message.mentions.users.first()) return message.channel.send("Nani ôm không khí hả giáo sư?");
    let r = rn({
        min: 0,
        max: hug.length - 1,
        integer: true
    });
    let image = hug[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đang ôm **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "pat")) {
        if (!message.mentions.users.first()) return message.channel.send("Xoa gì thế giáo sư");
    let r = rn({
        min: 0,
        max: pat.length - 1,
        integer: true
    });
    let image = pat[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** xoa đầu **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "liem")) {
        if (!message.mentions.users.first()) return message.channel.send("Liếm nani?");
    let r = rn({
        min: 0,
        max: lick.length - 1,
        integer: true
    });
    let image = lick[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đã liếm **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "bad")) {
        if (!message.mentions.users.first()) return message.channel.send("Giáo sư muốn đập ai?");
    let r = rn({
        min: 0,
        max: bad.length - 1,
        integer: true
    });
    let image = bad[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đập **' + message.mentions.users.first() + '** ngu cmn người' + ' =)))) \n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "tat")) {
        if (!message.mentions.users.first()) return message.channel.send("Táng vomom đứa nào bh??");
    let r = rn({
        min: 0,
        max: tat.length - 1,
        integer: true
    });
    let image = tat[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** táng **' + message.mentions.users.first() + '** sml ' + ' =)))) \n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "hon")) {
        if (!message.mentions.users.first()) return message.channel.send("Yêu ai nói ra nào :3");
    let r = rn({
        min: 0,
        max: kiss.length - 1,
        integer: true
    });
    let image = kiss[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đã hun **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "tgr")) {
        let r = rn({
            min: 0,
            max: triggered.length - 1,
            integer: true
        });
        let image = triggered[r];
        let embed = new Discord.RichEmbed()
        .setDescription('**' + message.author + '** đang triggered xD \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
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
    if (message.content.startsWith(prefix + "choc")) {
        if (!message.mentions.users.first()) return message.channel.send("Giáo sư tính chọc ai zị :v");
    let r = rn({
        min: 0,
        max: poke.length - 1,
        integer: true
    });
    let image = poke[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đã chọc **' + message.mentions.users.first() + '** :3 \n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "bite")) {
        if (!message.member.roles.find("name", "Sưi 's role", "Sưi only", "pro.")) {
            message.channel.send('Oof, lệnh này chỉ dành cho Swi, giáo sư ko dùng đc rồi :3')
            return
        }
        if (!message.mentions.users.first()) return message.channel.send("Cắn ai zị Swi?");
    let r = rn({
        min: 0,
        max: bite.length - 1,
        integer: true
    });
    let image = bite[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** cắn **' + message.mentions.users.first() + '** :scream: \n')
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
    if (message.content.startsWith(prefix + "police")) {
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
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.send('Oof, giáo sư ko có quyền xóa tin nhắn rồi :v');
                return;
            }
            if (isNaN(args[0])) {
                message.channel.send('Ồ nô, mình ko biết phải xóa bao nhiêu tn cả [ví dụ: ^xoa 5 (bao gồm cả câu lệnh và các tin muốn xóa) ]');
                return;
            }
            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' đang xóa...');
            message.channel.bulkDelete(fetched)
            message.channel.send(fetched.size + ' dòng chat đã đc xóa...').then(message => message.delete(7000));
        }
        purge();
    }
    if(message.content.startsWith(prefix + "kkswi")) {
        if (!message.member.roles.find("name", "Sưi 's role", "Sưi only", "pro.")) {
            message.channel.send('Oof, giáo sư ko dùng đc lệnh này rồi :3')
            return
        }
        let r = rn({
            min: 0,
            max: khoanhkhac.length - 1,
            integer: true
        });
        let image = khoanhkhac[r];
        let embed = new Discord.RichEmbed()
        .setDescription('Đoán xem đây là gì nào :v')
        .setImage(image)
        .setColor('RANDOM')
	    message.delete();
        message.channel.send(embed).then(message => message.delete(8000));
    }
    if(message.content.startsWith(prefix + "capoo")) {
        let r = rn({
            min: 0,
            max: capoo.length - 1,
            integer: true
        });
        let image = capoo[r];
        let embed = new Discord.RichEmbed()
        .setDescription('**Capoo**')
        .setImage(image)
        .setColor('RANDOM')
	    message.delete();
        message.channel.send(embed)
    }
});
Client.login(process.env.BOT_TOKEN);
