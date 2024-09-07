const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

// Define the ai command
cmd({
    pattern: "ai",
    desc: "AI chat",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetch response from AI API
        let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`);
        let response = data.data;

        // Format the reply
        let replyText = `ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋 𝗔𝗜 𝗖𝗵𝗮𝘁 🧠*

🔍 *𝗤𝘂𝗲𝗿𝘆*: _${q}_

💬 *𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲*: _${response}_

𝐕𝐈𝐌𝐀𝐌𝐎𝐃𝐒 𝐀𝐈 𝐁𝐎𝐓';

        // Send the reply with the thumbnail image
        await conn.sendMessage(from, { image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' }, caption: replyText }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
