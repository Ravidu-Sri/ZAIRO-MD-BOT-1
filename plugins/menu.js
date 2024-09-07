const {cmd} = require('../command');
const { runtime } = require('../lib/functions');
const os = require('os');

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "🪴",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        // RAM usage
        const totalRAM = Math.round(os.totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        const status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*

> *Uptime:* ${runtime(process.uptime())}

> *Used*: ${usedRAM} MB

> *Free*: ${freeRAM} MB

> *Total*: ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂`;

        // Define buttons
        const buttons = [
            { buttonId: 'owner', buttonText: { displayText: '💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔💥' }, type: 1 },
            { buttonId: 'group', buttonText: { displayText: '💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔💥' }, type: 1 },
            { buttonId: 'download', buttonText: { displayText: '💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔💥' }, type: 1 },
            { buttonId: 'other', buttonText: { displayText: '💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔💥' }, type: 1 }
        ];

        const buttonMessage = {
            text: status,
            footer: 'Select one of the menus below ⤵',
            buttons: buttons,
            headerType: 1 // 1 for text header, 2 for image header, etc.
        };

        // Send button message
        await conn.sendMessage(from, buttonMessage);

        // Capture button responses
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.buttonsResponseMessage) return;
            
            const buttonId = msg.message.buttonsResponseMessage.selectedButtonId;

            switch (buttonId) {
                case 'owner':
                    reply('✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝐀𝐈 𝐒𝐘𝐒𝐓𝐄𝐌*⤵*');
                    break;
                case 'group':
                    reply('💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔...');
                    break;
                case 'download':
                    reply('💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔...');
                    break;
                case 'other':
                    reply('💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔...');
                    break;
                default:
                    reply('Invalid option. Please select a valid menu option.');
            }
        });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e}`);
    }
});