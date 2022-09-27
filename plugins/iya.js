let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './mp3/iya.mp3', m)
}

handler.customPrefix = /^(iya|iyah)$/i
handler.command = new RegExp

module.exports = handler
