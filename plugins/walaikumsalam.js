let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './mp3/walaikumsalam.mp3', m)
}

handler.customPrefix = /^(assalamualaikum|asslm|Assalamualaikum)$/i
handler.command = new RegExp

module.exports = handler
