const {readEnv} = require('../lib/database');
const {cmd, commands} = require('../command');
const os = require("os");
const {runtime} = require('../lib/functions');

cmd({
    pattern: "menu",
    alias: ["panel","penal","list","allmenu"],
    react: "🪴",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

    let buttons = [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: 'Watch on Facebook',
                url: q
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "SD Quality",
                id: ".downfb " + result.sd
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "HD Quality",
                id: ".downfb " + result.hd
            }),
        }
    ];

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

මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️

1 💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥
2 💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵💥
3 💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵💥
4 💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥

*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*`;

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

        // Send buttons after the image message
        await conn.sendMessage(from, {
            text: status,
            footer: 'ZAIRO MD BOT',
            buttons: buttons.map(button => ({
                buttonId: JSON.parse(button.buttonParamsJson).id || button.name,
                buttonText: { displayText: JSON.parse(button.buttonParamsJson).display_text },
                type: 1 // Button type for quick reply
            })),
            headerType: 1 // Optional: You can remove this if you want only buttons
        }, { quoted: mek });

        // Store the sent message for reference
        global.sentMsg = sentMsg;

        // Listen for message updates globally
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim().toLowerCase();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        await reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝐀𝐈 𝐒𝐘𝐒𝐓𝐄𝐌⤵`);
                        break;
                    case '2':
                        await reply(`💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵`);
                        break;
                    case '3':
                        await reply(`💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵`);
                        break;
                    case '4':
                        await reply(`💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵`);
                        break;
                    default:
                        await reply("Invalid option. Please select a valid menu option (1-4).");
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});