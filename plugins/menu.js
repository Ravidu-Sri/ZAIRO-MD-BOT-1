const {readEnv} = require('../lib/database')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["panel","penal","list","allmenu"],
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


*✸𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐁𝐘 𝐕𝐈𝐌𝐀𝐌𝐎𝐃𝐒✸*`

     
        

        // Define buttons
        let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "OWNER MENU",
                    id: "vimu1"
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "GROUP MENU",
                    id: "vimu2"
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "DOWNLOAD MENU",
                    id: "vimu3 "
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "OTHER MENU",
id: "vimu4 "
                }),
            }
        ];

const imageUrl5 = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';


const sendmsg = await conn.sendButtonMessage(from, buttons, {image: imageUrl5, body: status}, { quoted: mek || null });
await conn.sendMessage(from, { react: { text: '⚓', key: mek.key }});

conn.ev.on('messages.upsert', async (msgUpdate) => {
    const msg = msgUpdate.messages[0];
    const buttonResponse = msg.message?.buttonsResponseMessage?.selectedButtonId;

    // Handle button responses
    if (buttonResponse) {
        switch (buttonResponse) {
            case 'vimu1':
                        let status1 = `vimamenu1`;

        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status1
        }, { quoted: mek || null });
                break;
            case 'vimu2':
                await conn.sendMessage(from, { text: "වැරදි ඇතුලත් කිරිමක් කරුණාකර නිවරදි නම්බර් එක ඇතුලත් කරන්න. (1.1, 1.2😁😁😁, 2.1, 2.2)." });
                break;
            case 'vimu3':
                await conn.sendMessage(from, { text: "වැරදි ඇතුලත් කිරිමක් කරුණාකර නිවරදි නම්බර් එක ඇතුලත් කරන්න. (1.1, 1.2)." });
                break;
            case 'vimu4':
                await conn.sendMessage(from, { text: "වැරදි ඇතුලත් කිරිමක්." });
                break;
            default:
                await conn.sendMessage(from, { text: "වැරදි ඇතුලත් කිරිමක් කරුණාකර නිවරදි නම්බර් එක ඇතුලත් කරන්න. (1.1, 1.2, 2.1, 2.2)." });
                break;
        }
    }
});
   } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
});




// Capture button responses



// Command "a "
cmd({
    pattern: "vimu1",
    react: "🎥",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let status1 = `vimamenu1`;

        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status1
        }, { quoted: mek || null });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (e) {
        reply('*Error !!*');
        console.log(e);
    }
});

// Command "vimu2"
cmd({
    pattern: "b",
    react: "🎥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let status2 = `vimamenu2`;

        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status2
        }, { quoted: mek || null });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (e) {
        reply('*Error !!*');
        console.log(e);
    }
});

// Command ".vimu3"
cmd({
    pattern: "c",
    react: "🎥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let status3 = `vimamenu3`;

        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status3
        }, { quoted: mek || null });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (e) {
        reply('*Error !!*');
        console.log(e);
    }
});

// Command ".vimu4"
cmd({
    pattern: ".vimu4",
    react: "🎥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let status4 = `vimamenu4`;

        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status4
        }, { quoted: mek || null });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (e) {
        reply('*Error !!*');
        console.log(e);
    }
});
