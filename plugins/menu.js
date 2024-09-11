const {readEnv} = require('../lib/database');
const {cmd, commands} = require('../command');
const os = require("os");
const {runtime} = require('../lib/functions');

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "🪴",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
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

*✸𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐁𝐘 𝐕𝐈𝐌𝐀𝐌𝐎𝐃𝐒✸*`;

        // Define buttons
        let buttons = [
            { buttonId: "vimu1", buttonText: { displayText: "OWNER MENU" }, type: 1 },
            { buttonId: "vimu2", buttonText: { displayText: "GROUP MENU" }, type: 1 },
            { buttonId: "vimu3", buttonText: { displayText: "DOWNLOAD MENU" }, type: 1 },
            { buttonId: "vimu4", buttonText: { displayText: "OTHER MENU" }, type: 1 }
        ];

        const imageUrl5 = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';

        // Send image with buttons
        await conn.sendMessage(from, {
            image: { url: imageUrl5 },
            caption: status,
            buttons: buttons,
            headerType: 4 // 4 for image header
        }, { quoted: mek || null });

        // React to the message
        await conn.sendMessage(from, { react: { text: '⚓', key: mek.key } });
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// Capture button responses
conn.on('message', async (message) => {
    const buttonResponse = message.message?.buttonsResponseMessage?.selectedButtonId;

    if (buttonResponse === 'vimu1') {
        const status1 = 'Owner Menu Selected'; // Set your status1 value here
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status1
        }, { quoted: mek || null });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } else if (buttonResponse === 'vimu2') {
        const status1 = 'Group Menu Selected'; // Set your status1 value here
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status1
        }, { quoted: mek || null });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } else {
        // Handle other cases
        await conn.sendMessage(from, { text: 'Invalid button response or no button clicked.' });
    }
});