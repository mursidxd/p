let handler = async (m, { conn, text, usedPrefix, command }) => {
let fetch = require("node-fetch")
let tio = 'halo kak, jaga kesehatan ya><'
 await conn.sendFile(m.chat, 'https://database.tioclkp02.repl.co/Dengarkanlah.mp3', 'Dengarkanlah.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: tio,
 body: wm, sourceUrl: 'https://mursidxml.mursidxd.repl.co', thumbnail: await (await fetch('https://telegra.ph/file/3883ff649c140061f320b.jpg')).buffer()}} 
     })

}

handler.customPrefix = /^(bot|woy|Bot|bang|p|woi)$/i
handler.command = new RegExp

module.exports = handler
