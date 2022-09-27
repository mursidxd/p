let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://database.tioclkp02.repl.co/1240fb4a4d600fb02355b.png', m, { packname: "Instagram : @mursid.st", author: "мυʀѕι∂ вσт-χмℓ" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq|makasih|makasi|thx|thanks)$/i
handler.command = new RegExp

module.exports = handler
