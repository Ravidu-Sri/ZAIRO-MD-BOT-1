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

     
        

        let buttons = [
    {
        buttonId: 'vimu1',
        buttonText: { displayText: 'OWNER MENU' },
        type: 1
    },
    {
        buttonId: 'vimu2',
        buttonText: { displayText: 'GROUP MENU' },
        type: 1
    },
    {
        buttonId: 'vimu3',
        buttonText: { displayText: 'DOWNLOAD MENU' },
        type: 1
    },
    {
        buttonId: 'vimu4',
        buttonText: { displayText: '.alive' },
        type: 1
    }
];

const imageUrl5 = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';

// Send the button message
const sendmsg = await conn.sendButtonMessage(from, buttons,{image: {url: imageUrl5}, caption: status, footer: 'Select an option:'}, { quoted: mek || null });

// Listen for messages
conn.ev.on('messages.upsert', async (msgUpdate) => {
    const msg = msgUpdate.messages[0];
    
    // Ensure it's a button reply
    if (msg.message && msg.message.buttonsResponseMessage && msg.key.fromMe === false) {
        const selectedButtonId = msg.message.buttonsResponseMessage.selectedButtonId;

        // Switch case to handle button replies
        switch (selectedButtonId) {
            case 'vimu1':
                await conn.sendMessage(from, { text: "OWNER MENU button selected" }, { quoted: msg });
                break;
            case 'vimu2':
                await conn.sendMessage(from, { text: "GROUP MENU button selected" }, { quoted: msg });
                break;
            case 'vimu3':
                await conn.sendMessage(from, { text: "DOWNLOAD MENU button selected" }, { quoted: msg });
                break;
            case 'vimu4':
                await conn.sendMessage(from, { text: ".alive button selected" }, { quoted: msg });
                break;
            default:
                await conn.sendMessage(from, { text: "Invalid selection, please choose again." }, { quoted: msg });
                break;
        }
    }
});
 } catch (error) {
        console.error(error);
    }
});

//const imageUrl5 = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';
//const sendmsg = await conn.sendButtonMessage(from, buttons, {image: {url: imageUrl5}, caption: status}, { quoted: mek || null });
