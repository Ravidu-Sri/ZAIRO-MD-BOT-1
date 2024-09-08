const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');

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
        const totalRAM = Math.round(os.totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*

> *Uptime:* ${runtime(process.uptime())}

> *Used*: ${usedRAM} MB

> *Free*: ${freeRAM} MB

> *Total*: ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂`;

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Create buttons
        const buttons = [
            {
                buttonId: '1',
                buttonText: { displayText: 'Option 1' },
                type: 1
            },
            {
                buttonId: '2',
                buttonText: { displayText: 'Option 2' },
                type: 1
            }
            // Add more buttons as needed
        ];

        const buttonMessage = {
            image: { url: imageUrl },
            caption: status,
            footer: 'Choose an option:',
            buttons: buttons,
            headerType: 4
        };

        // Send the message with buttons
        const sentMsg = await conn.sendMessage(from, buttonMessage, { quoted: mek || null });

        // Handle button responses
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.buttonsResponseMessage) return;

            const selectedOption = msg.message.buttonsResponseMessage.selectedButtonId;

            if (msg.message.contextInfo && msg.message.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`You selected Option 1.`);
                        break;
                    case '2':
                        reply(`You selected Option 2.`);
                        break;
                    default:
                        reply("Invalid option. Please select a valid menu option.");
                }
            }
        });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
