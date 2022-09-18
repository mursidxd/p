// beta list menu ujicoba doang 
// Sedang menyelesaikan menu jadi seadanya dlu ya banh:v
// Dilarang edit edit yg lain nanti errror
// kalo edit wm boleh aja asal se wajarnya

    let handler = async (m, { conn, text, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let yo = `Hai @${m.sender.split('@')[0]}`
    let tio = `*мυʀѕι∂ вσт-χмℓ*`
    let liv = `Click Here`
    const sections = [ {
      	title: `Aktif selama : ${uptime} | Waktu : ${time} WIB`,
        rows: [
	{title: `ѕємυα ρєʀιɴтαн`, rowId: `.a `},//, description: ``},
        {title: `ρємιℓιк вσт`, rowId: `#owner `},//, description: ``},
        {title: `ᴅσɴαѕι`, rowId: `#donasi `},//, description: ``},
        {title: `ѕᴄʀιρт`, rowId: `#sc `},//, description: ``},
        {title: `ѕρєє∂ вσт`, rowId: `#speed `},//, description: ``},
        ]
 } ]

  const listMessage = {
  text: tio,
  mentions: [m.sender],
  footer: 'мυʀѕι∂ вσт-χмℓ adalah bot whatsapp yang di bangun dengan Nodejs, dengan menggunakan server yang sangat kencang, tapi tidak terlalu kencang-kencang banget.',
  title: yo,
  buttonText: liv,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['Menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
