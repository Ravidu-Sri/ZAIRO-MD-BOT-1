const {readEnv} = require('../lib/database')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    react: "📰",
    desc: "Check uptime, RAM usage, and more",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

if(!isOwner && !isGroup && !isInbox) return

    try {

        const config = await readEnv();

        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        // Check AUTO_STATUS_READ variable
        const autoStatusRead = config.AUTO_READ_STATUS === 'true' ? 'Enabled' : 'Disabled';

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*

𝙽𝙾𝚆 𝚄𝚂𝙴𝙳 𝚁𝙰𝙼: ${usedRAM} 𝙼𝙱 
𝚄𝙿 𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}
®𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂®

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව තප්පර 10 මකා දමයි.*`

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/cFt7JgN/IMG-20240917-WA0053.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
      const vv = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });
setTimeout(async () => {
                    await conn.sendMessage(from, { delete: vv.key });
                }, 10000); // 10 seconds timeout for deletion

    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
})