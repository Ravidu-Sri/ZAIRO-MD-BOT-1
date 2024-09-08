const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    react: "📰",
    desc: "Check uptime, RAM usage, and more",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv();

        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*


𝙽𝙾𝚂𝙴𝙳 𝚁𝙰𝙼: ${usedRAM} 𝙼𝙱 
𝚄𝙿 𝚃𝙸𝙼𝙴: ${runtime(process.uptime())} 
®𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂®`;

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; 

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

        // Auto-delete all messages in the chat after 10 seconds (10000 milliseconds)
        setTimeout(async () => {
            // Fetch the chat messages
            const messages = await conn.fetchMessages(from, { delete: message.key });
            for (const message of messages) {
                if (message.key.fromMe) continue; // Skip messages sent by the bot
                await conn.sendMessage(from, { delete: message.key });
            }
        }, 1000); // Adjust the time as needed

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});