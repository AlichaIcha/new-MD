// S C R I P T  O R I  B Y  KIZH MD 🔭
// RECODE BY ALICHA ZAHRA
// Credits, jangan dihapus atau diubah!

// - - THANKS TO ALL

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")

// GLOBAL OWNER //

global.owner = ['6281400346604'] //GANTI JADI NO MU
global.namaowner = "Fadlan" // GANTI JADI NAMA MU
global.namebot = "Miww-MD" // GANT JADI NAMA BOT MU
global.sessionName = 'sessions' // JANGAN DI UBAH
global.prefa = ['','!','.',',','🐤','🗿'] // JANGAN DI UBAH KALAU GAK MAU EROR

// WATERMARK //

global.v = 'Miww-MD' // GANTI AJA
global.wm = '© YT | ALICHA ZAHRA' // GANTI AJA
global.packname = ""
global.author = "Miww-MD Multi" // GANTI AJA
global.author2 = "Miww-MD" // GANTI SAJA
global.footer = 'Miww-MD Multinasional' // GANTI AJA

// FOTO MENU //

global.thumbailUrl = "https://a.top4top.io/p_3214e5u0s0.jpg" // GANTI AJA KALAU MAU GANTI LOGO MENU NYA
global.url = "https://whatsapp.com/channel/0029VaeWhadHVvTXdCFBKU1h" // GANTI SAJA

// PAYMENT //
global.Qris = '-' //GANTI JADI QRIS MU
global.dana = '081387796894' // GANTI NO LU AJA
global.gopay = '081387796894'  // GANTI NO LU AJA
global.scan = 'SCAN QRIS ALL PAY DI ATAS'

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

// GLOBAL MESS //

global.mess = {
    success: 'done boskuu',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan admin terlebih dahulu kak',
    owner: 'Hanya Owner kak',
    group: 'harus di dalam grub kak',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus bot',
    wait: 'sabar',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'khusus premium" mau prem? chat owner',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//BATAS
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
