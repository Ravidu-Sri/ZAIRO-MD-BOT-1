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
                    display_text: ".alive",
id: "vimu4 "
                }),
            }
        ];

const imageUrl5 = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';
const sendmsg = await conn.sendButtonMessage(from, buttons, {image: imageUrl5, body: status}, { quoted: mek || null });

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            if (msg.message && msg.message.extendedTextMessage &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                const selectedOption = msg.message.extendedTextMessage.text.trim().toLowerCase();

                switch (selectedOption) {
                    case 'GROUP MENU':
                        console.log("Unknown⬇️⬇️ button selected");
                        break;

default:
                        reply("වැරදි ඇතුලත් කිරිමක් කරුණාකර නිවරදි නම්බර් එක ඇතුලත් කරන්න. (1.1, 1.2, 2.1, 2.2).");
                        break;
                }
            }
        });




  } catch (error) {
        console.error(error);
    }
});
