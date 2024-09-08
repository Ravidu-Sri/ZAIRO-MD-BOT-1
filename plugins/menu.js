const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');
const { MessageType } = require('@adiwajshing/baileys');

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "🪴",
    desc: "Check menu all",
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

> *Uptime:* ${runtime(process.uptime())}

> *Used*: ${usedRAM} MB

> *Free*: ${freeRAM} MB

> *Total*: ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂

මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️


 1 💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥

 2 💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵💥
 
 3 💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵💥
 
 4 💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥


*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*`;

        // Send the image with the status as the caption
        const sentMsg = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' }, // Replace with your image URL
            caption: status,
            buttons: [
                { buttonId: '1', buttonText: { displayText: '1 💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔⤵' }, type: 1 },
                { buttonId: '2', buttonText: { displayText: '2 💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵' }, type: 1 },
                { buttonId: '3', buttonText: { displayText: '3 💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵' }, type: 1 },
                { buttonId: '4', buttonText: { displayText: '4 💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵' }, type: 1 }
            ],
            headerType: 1
        }, { quoted: mek || null });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.buttonsResponseMessage) return;
            const selectedOption = msg.message.buttonsResponseMessage.selectedButtonId;

            if (msg.message.buttonsResponseMessage.contextInfo && msg.message.buttonsResponseMessage.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        await conn.sendMessage(from, { text: "✔️ Option 1 selected. Opening URL..." });
                        // Open URL
                        await conn.sendMessage(from, { text: "www.google.com" });
                        break;
                    case '2':
                        await conn.sendMessage(from, { text: "✔️ Option 2 selected. Opening URL..." });
                        // Open URL
                        await conn.sendMessage(from, { text: "www.google.com" });
                        break;
                    case '3':
                        await conn.sendMessage(from, { text: "✔️ Option 3 selected. Opening URL..." });
                        // Open URL
                        await conn.sendMessage(from, { text: "www.google.com" });
                        break;
                    case '4':
                        await conn.sendMessage(from, { text: "✔️ Option 4 selected. Opening URL..." });
                        // Open URL
                        await conn.sendMessage(from, { text: "www.google.com" });
                        break;
                    default:
                        await conn.sendMessage(from, { text: "Invalid option. Please select a valid menu option (1-4)." });
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});