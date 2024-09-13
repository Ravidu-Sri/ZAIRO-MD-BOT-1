const {readEnv} = require('../lib/database')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const { Buttons, MessageType } = require('@adiwajshing/baileys');

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

මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️


 1 💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥

 2 💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵💥
 
 3 💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵💥
 
 4 💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥


*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*`

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

const tt = 'https://whatsapp.com/channel/0029Valajr83bbV7FTQnM042';

const gg = 'https://whatsapp.com';

let buttons = [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SD Quality",
                        id: "uuuu"
                    }),
                },
{
name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
id: "ggtt",
                        display_text: "SD Quality"
                        
                    }),
}];



        // Send the image with the status as the caption
      const sentMsg = await conn.sendButtonMessage(from, buttons, {image: imageUrl, body: status}, { quoted: mek || null });

/*/ const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, buttons, { quoted: mek || null });*/

        
// Handling the button response
conn.ev.on('messages.upsert', async (msgUpdate) => {
    const msg = msgUpdate.messages[0];
    if (!msg.message || !msg.message.buttonsResponseMessage) return; // Check for button message response

    const selectedButtonId = msg.message.buttonsResponseMessage.selectedButtonId; // Get the button ID
    if (selectedButtonId === 'uuuu') {
        reply(`You selected SD Quality! Here is your lin}`);
    } else if (selectedButtonId === 'ggtt') {
        reply(`You selected HD Quality! Here is your lin}`);
    } else {
        reply("Invalid option selected.");
    }
});
    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
});