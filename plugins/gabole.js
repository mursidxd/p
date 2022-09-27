let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './mp3/gabole.mp3', m)
}

handler.customPrefix = /^(memek|kontol|asu|anj|anjing|mmk|kntl|bangsat|joh|anjir)$/i
handler.command = new RegExp

module.exports = handler
