/*
JANGAN MEMPERJUALKAN SCRIPT BOT FREE
DI JUAL TAU AKIBATNYA

BASE ORI BY : KIZH MD
CREATE BY : KIZH MD

RECODE BY: ALICHA ZAHRA
*/


//SPECIAL
require(`./settings`)

//NODE
const { 
WA_DEFAULT_EPHEMERAL, 
getAggregateVotesInPollMessage, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage, 
areJidsSameUser, 
getContentType 
} = require("@whiskeysockets/baileys")
const { 
exec, 
spawn, 
execSync 
} = require("child_process")
const cheerio = require("cheerio")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const chalk = require("chalk")
const crypto = require("crypto")
const util = require("util")
const got = require("got")
const axios = require("axios")
const fs = require("fs")
const Jimp = require("jimp")
const path = require("path")
const fsx = require('fs-extra')
const PhoneNumber = require("awesome-phonenumber")
const speed = require("performance-now")
const moment = require("moment-timezone")
const https = require('https') //baru
const { TelegraPh } = require('./lib/uploader')
const os = require('os')
const ytdl = require("ytdl-core")
const yts = require("yt-search")
const { remini } = require('./lib/remini')
const { goLens } = require("./lib/googlens");


//lib
const { 
getBuffer,
getRandom,
tanggal
} = require('./lib/myfunc')
const { 
getGroupAdmins, 
fetchJson, 
reSize, 
generateProfilePicture, 
sleep, 
clockString,
runtime,
jsonformat
} = require("./lib/functions.js")
// Time
///scrape
const scp1 = require('./lib/ssweb') 
//////Lib2
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
///

//DATABASE
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))//baru
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
//BATAS

//WAKTU
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
//const tanggal = moment().tz("Asia/Jakarta").format("ll")
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wa = `0@s.whatsapp.net`
const Owner = global.owner + '@s.whatsapp.net'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

// read database
global.db.data = JSON.parse(fs.readFileSync('./database/json/database.json'))
if (global.db.data) global.db.data = {
users: {},
group: {},
chats: {},
database: {},
settings: {},
donate: {},
others: {},
sticker: {},
...(global.db.data || {})
}

//__________________________________//
//_________________________________//
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('./src/limit.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay } = require('./src/monay.js')

// read database game
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

module.exports = alicha = async (alicha, m, chatUpdate, store) => {
try {
const type = getContentType(m.message)
const content = JSON.stringify(m.message)
const from = m.key.remoteJid
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//

const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const groupMetadata = isGroup? await alicha.groupMetadata(m.chat).catch(e => {}) : ""
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupOwner = isGroup? groupMetadata.owner : ""
const participants = isGroup? await groupMetadata.participants : ""
const groupAdmins = isGroup? await participants.filter(v => v.admin !== null).map(v => v.id) : ""
const groupMembers = isGroup? groupMetadata.participants : ""
const isGroupAdmins = isGroup? groupAdmins.includes(m.sender) : false
const botNumber = await alicha.decodeJid(alicha.user.id)
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
const sender = m.key.fromMe ? (alicha.user.id.split(':')[0]+'@s.whatsapp.net' || alicha.user.id) : (m.key.participant || m.key.remoteJid)
const pushname = m.pushName || "No Name"
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//___//


/////DOWNLOAD MP3
const ytmp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, {
filter: 'audioonly'
}).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await alicha.sendMessage(m.chat, {
audio: fs.readFileSync(mp3File),
mimetype: 'audio/mp4'
}, {
quoted: m
})
})
} catch (err) {
reply(`${err}`)
}
}
//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await alicha.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}

// Sayying time
const hours = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(hours < "23:59:00"){
var waktuucapan = 'Malam 🌃'
}
if(hours < "19:00:00"){
var waktuucapan = 'Petang 🌆'
}
if(hours < "18:00:00"){
var waktuucapan = 'Sore 🌅'
}
if(hours < "15:00:00"){
var waktuucapan = 'Siang 🏙'
}
if(hours < "10:00:00"){
var waktuucapan = 'Pagi 🌄'
}
if(hours < "05:00:00"){
var waktuucapan = 'Subuh 🌉'
}
if(hours < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antilink2' in chats)) chats.antilink2 = false
if (!('promosi' in chats)) chats.promosi = false
if (!('promosi2' in chats)) chats.promosi2 = false
if (!('toxic' in chats)) chats.toxic = false
} else global.db.data.chats[m.chat] = {
antilink: false,
antilink2: false,
promosi: false,
promosi2: false,
toxic: false,
}


const parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }



const reply = (teks) => {
alicha.sendMessage(from, { text : teks }, { quoted : m })
}
// Anti Link 2 HAPUS
if (db.data.chats[m.chat].antilink2) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await alicha.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
alicha.sendMessage(m.chat, { delete: m.key })
alicha.sendMessage(m.chat, { delete: m.key })
}
}
// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await alicha.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
alicha.sendMessage(m.chat, { delete: m.key })
alicha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti promosi HAPUS
if (db.data.chats[m.chat].promosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install|JASA SUNTIK PENGIKUT CH TELEGRAM`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
alicha.sendMessage(m.chat, { delete: m.key })
alicha.sendMessage(m.chat, { delete: m.key })

}
}
// Anti promosi
if (db.data.chats[m.chat].promosi) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
alicha.sendMessage(m.chat, { delete: m.key })
alicha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//================================================
try {
ppuser = await alicha.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
}
//=================================================//
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 *TEBAK LAGU*  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik tebak lagu`)
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 *TEBAK GAMBAR*  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik tebak gambar`)
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 *TEBAK KATA*  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik tebak kata`)
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 *TEBAK LONTONG*  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik tebak lontong`)
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 *TEBAK KALIMAT*  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik tebak kalimat`)
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 *TEBAK LIRIK*  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik tebak lirik`)
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 *TEBAK TEBAKKAN*  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik tebak tebakan`)
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//anti toxic
const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|anj|bangsat|bgsd|peler|pantek|ngentod|kontol|memek|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri

if (db.data.chats[m.chat].toxic) {
if (budy.match(`${isToxic}`)) {
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
alicha.sendMessage(m.chat, { delete: m.key })
alicha.sendMessage(m.chat, { delete: m.key })
//alicha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}

// Response Addlist
if (!isCmd && isGroup && isAlreadyResponList(from, body, db_respon_list)) {
var get_data_respon = getDataResponList(from, body, db_respon_list)
if (get_data_respon.isImage === false) {
alicha.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
quoted: m
})
} else {
alicha.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}


// Public & Self
if (!alicha.public) {
if (!m.key.fromMe && !isPremium && !isOwner) return
}
if (m.message) {
alicha.readMessages([m.key])
}

try {
ppuser = await alicha.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
async function Tiktokdl(url) {
//async function tiktokdl(url) {
try {
function API_URL(aweme) {
return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
};
async function getAwemeId(url) {
// any :/
let result;
const Konto1 = /video\/([\d|\+]+)?\/?/;
const valid = url.match(Konto1);
if (valid) {
return valid[1];
}
else {
try {
const data = await got
.get(url, {
headers: {
"Accept-Encoding": "deflate",
},
maxRedirects: 0,
})
.catch((e) => e.response.headers.location);
const _url = data;
const _valid = _url.match(Konto1);
if (_valid) {
result = _valid[1];
}
}
catch (error) {
// console.log(error)
result = false;
}
}
return result;
};
const valid = await getAwemeId(url);
//if (!valid) return false // result = false
const data = await got
.get(API_URL(valid), {
headers: {
"Accept-Encoding": "deflate",
"User-Agent": "okhttp/3.14.9",
},
})
.catch((e) => e.response);
//if (!data) return false // result = false
const body = JSON.parse(data.body);
const obj = body.aweme_list.find((o) => o.aweme_id === valid)
const results = {
aweme_id: obj.aweme_id,
region: obj.region,
desc: obj.desc,
create_time: obj.create_time,
author: {
uid: obj.author.uid,
unique_id: obj.author.unique_id,
nickname: obj.author.nickname,
birthday: obj.author.birthday,
},
duration: obj.music.duration,
download: {
nowm: obj.video.play_addr.url_list[0],
wm: obj.video.download_addr.url_list[0],
music: obj.music.play_url.url_list[0],
music_info: {
id: obj.music.id,
title: obj.music.title,
author: obj.music.author,
is_original: obj.music.is_original,
cover_hd: obj.music.cover_hd.url_list[0],
cover_large: obj.music.cover_large.url_list[0],
cover_medium: obj.music.cover_medium.url_list[0],
},
},
};
return {
status: true,
result: results//data.body //valid
}
} catch (e) {
return { status: false, result: e }
}
}
////

let emot = `${pickRandom(['☍', '々', '〆'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
switch (command) {
case "public": {
if (!isOwner) return reply(mess.owner)
alicha.public = true
reply(`*_Sukses Mode Public ✅_*`)
}
break
case "self": {
if (!isOwner) return reply(mess.owner)
alicha.public = false
reply(`*_Sukses Mode Self ✅_*`)
}
break
case 'owner':
case 'creator': {
await alicha.sendContact(m.chat, global.owner, m)
}
break
case 'addprem':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 62xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await alicha.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addowner':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 62xxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await alicha.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let alicha of premium) {
teks += `- ${alicha}\n`
}
teks += `\n*Total : ${premium.length}*`
alicha.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
break
case 'listowner': case 'listown':
teks = '*owner List*\n\n'
for (let kontol of owner) {
teks += `- ${kontol}\n`
}
teks += `\n*Total : ${owner.length}*`
alicha.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
case'neko':{
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
let neko = await getBuffer(`https://skizo.tech/api/nsfw?search=neko&apikey=${skizoapi}`)
await alicha.sendMessage(m.chat, {image: neko, caption: `Nih ${command} Nya 😋`},{quoted: m})
}
break
case'waifu':{
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
let waifu = await getBuffer(`https://skizo.tech/api/nsfw?search=waifu&apikey=${skizoapi}`)
await alicha.sendMessage(m.chat, {image: waifu, caption: `Nih ${command} Nya 😋`},{quoted: m})
}
break
case'miww':{
reply(mess.wait)
let miww = await getBuffer(`https://api.betabotz.eu.org/api/anime/sagiri?apikey=beta-kizh1`)
await alicha.sendMessage(m.chat, {image: miww, caption: `Nih ${command} Nya 😋`},{quoted: m})
}
break
case'shinomiya':{
reply(mess.wait)
let shinomiya = await getBuffer(`https://api.betabotz.eu.org/api/anime/shinomiya?apikey=beta-kizh1`)
await alicha.sendMessage(m.chat, {image: shinomiya, caption: `Nih ${command} Nya 😋`},{quoted: m})
}
break
case 'ai': case 'chatgpt':
try {
if (!text) return reply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://skizo.tech/api/openai?text=${text}&apikey=${skizoapi}`)
const gpt = result.result
reply(`${gpt}`)
} catch (err) {
console.log(err)
reply('Terjadi Kesalahan')
}
break
case 'gimage': case 'pinterest': case'pin': {
if (!q) return reply (`salah!!\nContoh: ${prefix + command} jokowi pake jas hujan`)
reply(mess.wait)
let res = await fetchJson (`https://skizo.tech/api/pinterest?search=${q}&apikey=${skizoapi}`)
alicha.sendMessage(from, {image: {url: res[0].media.url}}, {quoted:m})
}
break
case 'instagram':
case 'igdl':
case 'ig': {
if (!text) return reply(`Contoh: ${prefix + command} link`);
reply(mess.wait);
let data = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=Akiraa&url=${encodeURIComponent(text)}`);
const videoUrl = data.result[0];
const videoCaption = "Video Instagram Nya";
alicha.sendMessage(m.chat, { caption: 'ini dia video Instagram nya', video: { url: videoUrl } }, { quoted: m });

}
break
case 'memeindo':
reply(mess.wait)
alicha.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lol}`}, caption: `sangad Cringe Kaya idup Lo🗿`}, {quoted: m})
break
case 'playtiktok':{
if (!q) return reply( `Example : ${prefix + command} story wa`)
reply(mess.wait);
const response = await fetch(`https://skizo.tech/api/ttsearch?search=${q}&apikey=${skizoapi}`);
const data = await response.json();
alicha.sendMessage(m.chat, { video: { url: data.play }, caption: data.title }, { quoted: m });
}
break
case 'tiktokaudio':{
if (!text) return reply( `Example : ${prefix + command} link`)
reply(mess.wait);
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
alicha.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'yts': case 'ytsearch':{
if (!text) return reply( `Example : ${prefix + command} lagu kisana2`)
let reso = await yts(`${text}`)
let aramat = reso.all
var tbuff = await getBuffer(aramat[0].image)
let teks = aramat.map(v => {
switch (v.type) {
case 'video': return `
📛 Title : *${v.title}* 
⏰ Durasi: ${v.timestamp}
🚀 Diupload ${v.ago}
😎 Views : ${v.views}
🌀 Url : ${v.url}
`.trim()
case 'channel': return `
📛 Channel : *${v.name}*
🌀 Url : ${v.url}
👻 Subscriber : ${v.subCountLabel} (${v.subCount})
🎦 Total Video : ${v.videoCount}
`.trim()
}
}).filter(v => v).join('\n----------------------------------------\n')

alicha.sendMessage(m.chat, { image: tbuff, caption: teks }, { quoted: m })

 .catch((err) => {
reply("Not found")
})
}
break
case 'ytmp4':
case 'playmp4':
if (!text) return reply( `Example : ${prefix + command} link`)
axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lol}&url=${args[0]}`)
.then(({ data }) => {
var caption = `❖ Title    : *${data.result.title}*\n`
caption += `❖ Size     : *${data.result.size}*`
alicha.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
alicha.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })})
})
.catch(console.error)
break
case 'ytmp3':
case 'playmp3':
if (!text) return reply("Masukan link youtube nya kak")
try{
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
//var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break
case 'antitoxic': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].toxic) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].toxic = true
reply(`Toxic Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].toxic) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].toxic = false
reply(`Toxic Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command }on/off`)
}
}
break
case 'antilink2': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink2) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = true
reply(`antilink2 Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink2) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = false
reply(`antilink2 Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'ytplay':
case 'play':{
if (!q) return reply(`🚩 *Example:* ${prefix+command} lagu sad`)
let yts = require('yt-search')
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let a = `💸Duration : ${anu.timestamp}\n🎉Viewers : ${anu.views}\n`
await alicha.sendMessage(m.chat, {
text: a,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: anu.title,
body: anu.ago,
thumbnailUrl: anu.image,
sourceUrl: anu.url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
await sleep(1000)
if (anu.seconds < 1000) {
await ytmp3(anu.url)
} else reply('durasi nya bro ke besaran')
}
break
case 'tiktok': case 'tt': {
if (!q) return reply(`*CONTOH :* ${prefix+command} https://vt.tiktok.com/ZS8TQkpTK/`)
await alicha.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
spas = "             "
let ler = await Tiktokdl(q)
let cer = ler.result
let cap = `${spas}*「 T I K T O K 」*

*🎀Author:* ${cer.author.nickname}
${namebot}
`
alicha.sendMessage(m.chat, { video: { url: cer.download.nowm }, caption: cap }, { quoted: m})
};
break
case 'qc': case 'qcs': {
if (!q) return reply(`Contoh: ${prefix + command} pink hallo\n\nlist warna\npink\nbiru\mmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
if (text.length > 100) return reply(`🚩 Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'biru':
backgroundColor = '#6cace4';
break;
case 'merah':
backgroundColor = '#f44336';
break;
case 'hijau':
backgroundColor = '#4caf50';
break;
case 'kuning':
backgroundColor = '#ffeb3b';
break;
case 'ungu':
backgroundColor = '#9c27b0';
break;
case 'birutua':
backgroundColor = '#0d47a1';
break;
case 'birumuda':
backgroundColor = '#03a9f4'; 
break;
case 'abu':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'hitam':
backgroundColor = '#000000';
break;
case 'putih':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'merahmuda':
backgroundColor = '#FFC0CB';
break;
case 'cokelat':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'api':
backgroundColor = '#B22222';
break;
case 'birulangit':
backgroundColor = '#00BFFF';
break; 
case 'jingga':
backgroundColor = '#FF7F50';
break;
case 'birulangitcerah':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'birumudalangit':
backgroundColor = '#87CEEB'; 
break; 
case 'hijaulaut':
backgroundColor = '#20B2AA'; 
break; 
case 'merahtua':
backgroundColor = '#8B0000'; 
break; 
case 'oranyemerah':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'ungutua':
backgroundColor = '#BA55D3'; 
break; 
case 'hijaulumut':
backgroundColor = '#00FF7F'; 
break; 
case 'hijaugelap':
backgroundColor = '#008000'; 
break; 
case 'birulaut':
backgroundColor = '#191970'; 
break; 
case 'oranyetua':
backgroundColor = '#FF8C00'; 
break; 
case 'ungukehitaman':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'magentagelap':
backgroundColor = '#8B008B'; 
break;
case 'abu-abutua':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'hijautua':
backgroundColor = '#BDB76B'; 
break;
case 'merahgelap':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'abu-abutua':
backgroundColor = '#696969'; 
break;
case 'ungugelap':
backgroundColor = '#483D8B'; 
break;
case 'emas':
backgroundColor = '#FFD700'; 
break;
case 'perak':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('Warna yang dipilih tidak tersedia.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await alicha.profilePictureUrl(m.sender, "image").catch(() => 'https://a.top4top.io/p_3214e5u0s0.jpg'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://quote.btch.bz/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
alicha.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await alicha.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await alicha.imgToSticker(m.chat, media, m, { packname: `Created By ${namebot}\n${hariini}` , author: `Owner ${namaowner}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await alicha.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await alicha.vidToSticker(m.chat, media, m, { packname: `Created By ${namebot}\n${hariini}` , author: `Owner ${namaowner}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await alicha.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await alicha.sendStickerFromUrl(from, media, m, {packname: `Created By ${namebot}\n${hariini}` , author: `Owner ${namaowner}\nTime ${time}` })
await fs.unlinkSync(media)
} else reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
break
case 'smeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return reply(respond)
if (!q) return reply(respond)
reply(mess.wait)
let atas = q.split('|')[0] ? q.split('|')[0] : '-'
let bawah = q.split('|')[1] ? q.split('|')[1] : '-'
let dwnld = await alicha.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPh(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await alicha.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(FaTiH)
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
alicha.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'simi': case 'si': {
if (!q) return reply(`Example: ${prefix + command}`)
let data = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${text}`)
reply(data.result)
}
break
case 'tiktokgirl':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./random/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./random/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./random/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./random/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./random/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./random/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./random/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
if (!isPremium) return reply(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./random/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
alicha.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
reply(teks)
}
break
case 'addlist':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item@Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
media = await alicha.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case 'dellist':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'payment':
if (!isOwner) return reply(mess.owner)
let p = `*P A Y M E N T*\n\n`
p += `*DANA: ${dana}*\n`
p += `*GOPAY: ${gopay}*\n`
p += `*QRIS: ${scan}*\n`
alicha.sendMessage(m.chat, { image: { url: global.Qris }, caption: p }, { quoted: m })
break
case 'attp':
if (!q) return reply('Masukan Text')
reply(mess.wait)
alicha.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${q}`} }, { quoted: m })
break
case 'wallpaper':
if (!text) return reply(`Contoh: ${prefix + command} wallpaper amime hd`);
try{
reply(mess.wait)
alicha.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}` } })
}catch(err){
console.log((err) => reply(mess.err))
}
break
case 'tourl': {
const media = await alicha.downloadAndSaveMediaMessage(quoted)
let anuu = await TelegraPh (media)
reply(`📮 *L I N K :*
${anuu}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* No Expiry Date`)
await fs.unlinkSync(media)
}
break
case 'ss': case 'ssweb':{
if (!q) return reply(`Contoh ${prefix+command} link`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
alicha.sendMessage(m.chat,{image: krt.result, caption: mess.success},{quoted:m})
}
break
case 'remini': case 'hd': case 'hdr': {
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
alicha.sendMessage(m.chat, { image: proses, caption: 'bilang apa?'}, { quoted: m})
}
break
case 'apakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Miww-MD`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
//=================================================//
case 'tebak': {
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await alicha.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 alicha.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 alicha.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/52a9862e26a52b4a390e2.png' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 alicha.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 alicha.sendMessage(m.chat, { image: { url: 'https://a.top4top.io/p_3214e5u0s0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 alicha.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 alicha.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/52a9862e26a52b4a390e2.png' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 alicha.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 alicha.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/52a9862e26a52b4a390e2.png' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 alicha.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 alicha.sendMessage(m.chat, { image: { url: 'https://a.top4top.io/p_3214e5u0s0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 alicha.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(30000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 alicha.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/52a9862e26a52b4a390e2.png' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
case 'facebook': case 'fbdl': case 'fb': {
reply(mess.wait);
if (!text) return reply(`Contoh: ${prefix + command} link`);
if (!text.includes('facebook')) return replygcxeon('Link Tidak Valid!!');
let data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lol}&url=${encodeURIComponent(text)}`);
if (data && data.result) {
const videoUrl = data.result[0];
const videoCaption = data.caption || "Video Facebook";
alicha.sendMessage(m.chat, { caption: videoCaption, video: { url: videoUrl } }, { quoted: m });
} else {
reply('Video Facebook tidak ditemukan atau terjadi kesalahan.');
}
}
break
case "google":{
if (!text) return reply(`Contoh : ${prefix + command} cara mati dengan mudah`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `• *Title* : ${g.title}\n`;
teks += `• *Description* : ${g.snippet}\n`;
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
reply(teks)
})
}
break
case 'infocuaca':{
if (!q) return reply(`Example: ${prefix + command} Tasikmalaya`)
reply(mess.wait)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${lol}`)
var titttttttttt = `Tempat : ${data.result.tempat}\n`
titttttttttt += `Cuaca : ${data.result.cuaca}\n`
titttttttttt += `Angin : ${data.result.angin}\n`
titttttttttt += `Description : ${data.result.description}\n`
titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
titttttttttt += `Suhu : ${data.result.suhu}\n`
titttttttttt += `Udara : ${data.result.udara}\n`
titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
alicha.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
reply(titttttttttt)
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'handhold':
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
alicha.sendImageAsSticker(m.chat, data.url, m, { packname: global.global.packname, author: global.author })
})
break
case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`Contoh : ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`Contoh : ${prefix + command} 😅+🤔`)
reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await alicha.sendImageAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: 'tes',
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
                
}
break
case 'tambah':{
if (!text.includes('+')) return reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!text.includes('-')) return reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!text.includes('*')) return reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (!text.includes('/')) return reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
reply(`${nilai_one / nilai_two}`)}
break
case 'txt2img': {
if (!q) return reply(`Example: ${prefix + command} cat,fish`)
reply(mess.wait)
alicha.sendMessage(m.chat, { image: { url: `https://api.betabotz.eu.org/api/maker/text2img?text=${text}&apikey=beta-kizh1` }}, { quoted: m })
}
break
case 'menu': {
const menu = `
  「  *MENU*  」
  
乂 *I N F O  B O T*
┌⁠─────────────────  
 ${emot} *Mode:* ${alicha.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
 ${emot} *Runtime:* ${runtime(process.uptime())}
 ${emot} *Total Premium:* ${premium.length}
└─────────────────
乂 *I N F O  U S E R*
┌⁠─────────────────
 ${emot} *Name:* ${pushname}
 ${emot} *Number:* ${m.sender.split('@')[0]}
 ${emot} *Status:* ${isOwner ? "Owner ❄" : "User ⚔️"}
 ${emot} *User:* ${isPremium ? 'Premium ❄' : 'Gratisan⚔️'}
└─────────────────


     乂───『 *MENU* 』───乂

       ${emot} ${prefix} allmenu
 
     └─────────────────`
alicha.sendMessage(m.chat, {
video: fs.readFileSync('./src/media/menu.jpg'),
caption: menu,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: namebot,
newsletterJid: "120363299797690674@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `${waktuucapan} ${pushname}`,
body: '',
thumbnailUrl: thumbailUrl,
sourceUrl: url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
alicha.sendMessage(m.chat, {audio: fs.readFileSync('./media/musik.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})     
break
case 'allmenu': {
const key = `「  *ALLMENU*  」
  
乂 *I N F O  B O T*
┌⁠─────────────────  
 ☍ *Mode:* ${alicha.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
 ☍ *Runtime:* ${runtime(process.uptime())}
 ☍ *Total Premium:* ${premium.length}
└─────────────────
乂 *I N F O  U S E R*
┌⁠─────────────────
 ☍ *Name:* ${pushname}
 ☍ *Number:* ${m.sender.split('@')[0]}
 $☍ *Status:* ${isOwner ? "Owner ❄" : "User ⚔️"}
 ☍ *User:* ${isPremium ? 'Premium ❄' : 'Gratisan⚔️'}
└─────────────────


     乂───『 *DOWNLOAD* 』───乂

       ${emot} ${prefix} tiktok
       ${emot} ${prefix} instagram
       ${emot} ${prefix} ytmp3
       ${emot} ${prefix} ytmp4
       ${emot} ${prefix} tiktokaudio
       ${emot} ${prefix} facebook
       
     乂───『 *SEARCH* 』───乂

       ${emot} ${prefix} play
       ${emot} ${prefix} yts
       ${emot} ${prefix} playtiktok
       ${emot} ${prefix} pinterest
       ${emot} ${prefix} wallpaper
       ${emot} ${prefix} ssweb
       ${emot} ${prefix} google
       ${emot} ${prefix} infocuaca
      
     乂───『 *CONVERT* 』───乂

       ${emot} ${prefix} remini

     乂───『 *STORE* 』───乂

       ${emot} ${prefix} payment
       ${emot} ${prefix} addlist
       ${emot} ${prefix} dellist
       ${emot} ${prefix} store
       ${emot} ${prefix} tambah
       ${emot} ${prefix} kurang
       ${emot} ${prefix} bagi
       ${emot} ${prefix} kali

     乂───『 *STORE* 』───乂

       ${emot} ${prefix} antitoxic
       ${emot} ${prefix} antilink2
       ${emot} ${prefix} hidetag

     乂───『 *OWNER* 』───乂

       ${emot} ${prefix} addprem
       ${emot} ${prefix} addowner
       ${emot} ${prefix} dellprem
       ${emot} ${prefix} dellown
       ${emot} ${prefix} listown
       ${emot} ${prefix} listprem

     乂───『 *AIMENU* 』───乂

       ${emot} ${prefix} ai
       ${emot} ${prefix} simi
       ${emot} ${prefix} txt2img
       
     乂───『 *GAMES* 』───乂

       ${emot} ${prefix} tebak kata
       ${emot} ${prefix} tebak gambar
       ${emot} ${prefix} tebak kalimat
       ${emot} ${prefix} tebak lirik
       ${emot} ${prefix} tebak lagu
       ${emot} ${prefix} tebak lontong

     乂───『 *TOLS* 』───乂

       ${emot} ${prefix} sticker
       ${emot} ${prefix} smeme
       ${emot} ${prefix} attp
       ${emot} ${prefix} qc
       ${emot} ${prefix} emojimix   
       
     乂───『 *NWFS* 』───乂

       ${emot} ${prefix} waifu
       ${emot} ${prefix} neko
       
     乂───『 *ANIME* 』───乂

       ${emot} ${prefix} miww
       ${emot} ${prefix} shinomiya

     乂───『 *PREMIUM* 』───乂
     
       ${emot} ${prefix} tiktokkayes
       ${emot} ${prefix} tiktokgirl
       ${emot} ${prefix} tiktokghea
       ${emot} ${prefix} tiktokbocil
       ${emot} ${prefix} tiktoknukhty
       ${emot} ${prefix} tiktoksantuy
       ${emot} ${prefix} tiktokpanrika
       ${emot} ${prefix} tiktoknotnot
       
     乂───『 *FUNMENU* 』───乂
     
       ${emot} ${prefix} memeindo
       ${emot} ${prefix} apakah
       ${emot} ${prefix} bagaimanakah
       ${emot} ${prefix} bisakah
       ${emot} ${prefix} rate
       ${emot} ${prefix} gantengcek
       ${emot} ${prefix} cantikcek
       ${emot} ${prefix} sangecek
       ${emot} ${prefix} kapankah
       
     乂───『 *STICKER* 』───乂
     
       ${emot} ${prefix} cry
       ${emot} ${prefix} kill
       ${emot} ${prefix} hug
       ${emot} ${prefix} pat
       ${emot} ${prefix} lick
       ${emot} ${prefix} kiss
       ${emot} ${prefix} bite
       ${emot} ${prefix} yeet
       ${emot} ${prefix} bully
       ${emot} ${prefix} bonk
       ${emot} ${prefix} wink
       ${emot} ${prefix} poke
       ${emot} ${prefix} nom
       ${emot} ${prefix} slap
       ${emot} ${prefix} smile
       ${emot} ${prefix} wave
       ${emot} ${prefix} awoo
       ${emot} ${prefix} blush
       ${emot} ${prefix} smug
       ${emot} ${prefix} glomp
       ${emot} ${prefix} happy
       ${emot} ${prefix} dance
       ${emot} ${prefix} cringe
       ${emot} ${prefix} cuddle
       ${emot} ${prefix} highfive
       ${emot} ${prefix} handhold
 
     └─────────────────

        ⌕ My YouTube Alicha Icha ⌕
     
         Miww-MD Multi Device
`
alicha.sendMessage(m.chat, {
text: key,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: thumbailUrl,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break

//━━━━━━━━━━━━━━━[ BATAS AKHIR ]━━━━━━━━━━━━━━━━━//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
alicha.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
console.log(util.format(err))
let e = String(err)
alicha.sendMessage(`${global.owner}@s.whatsapp.net`, {text:e})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})