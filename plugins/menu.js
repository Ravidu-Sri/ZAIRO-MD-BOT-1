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

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂`;

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Create buttons
      const buttons = [
    { buttonId: '1', buttonText: { displayText: '💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔' }, type: 1 },
    { buttonId: '2', buttonText: { displayText: '💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔' }, type: 1 },
    { buttonId: '3', buttonText: { displayText: '💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔' }, type: 1 },
    { buttonId: '4', buttonText: { displayText: '💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔' }, type: 1 }
];

const buttonMessage = {
    text: `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*\n\n> *Uptime:* ${runtime(process.uptime())}\n\n> *Used*: ${usedRAM} MB\n\n> *Free*: ${freeRAM} MB\n\n> *Total*: ${totalRAM} MB\n\n> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂\n\nමෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️`,
    footer: 'මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️',
    buttons: buttons,
    headerType: 1
};

// Send the message with buttons
await conn.sendMessage(from, buttonMessage, { quoted: mek || null });


        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.buttonsResponseMessage) return;
            const selectedOption = msg.message.buttonsResponseMessage.selectedButtonId.trim();
            
            if (msg.message.buttonsResponseMessage.contextInfo && msg.message.buttonsResponseMessage.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝐀𝐈 𝐒𝐘𝐒𝐓𝐄𝐌*⤵*`);
                        break;
                    case '2':
                        reply(`💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ...`); // Include the full group menu text here
                        break;
                    case '3':
                        reply(`💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ...`); // Include the full download menu text here
                        break;
                    case '4':
                        reply(`💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 ...`); // Include the full other menu text here
                        break;
                    default:
                        reply("Invalid option. Please select a valid menu option (1-4).");
                }
            }
        });
        
    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
});