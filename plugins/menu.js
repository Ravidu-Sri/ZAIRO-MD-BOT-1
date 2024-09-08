const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const os = require('os');

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "🪴",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, isGroup, reply }) => {
    try {
        // RAM usage
        const totalRAM = Math.round(os.totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        // Poll Message
        const status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*
        
> *Uptime:* ${runtime(process.uptime())}
> *Used:* ${usedRAM} MB
> *Free:* ${freeRAM} MB
> *Total:* ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂

මෙන්න විකල්පයන්, ඔබ කැමති විකල්පය ඇතුළත් කරන්න:

1. 💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔💥
2. 💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔💥
3. 💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔💥
4. 💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔💥`;

        const pollMessage = {
            poll: {
                title: 'Select Menu',
                options: [
                    { optionName: 'Owner Menu' },
                    { optionName: 'Group Menu' },
                    { optionName: 'Download Menu' },
                    { optionName: 'Other Menu' }
                ],
                selectableOptionsCount: 1,
            }
        };

        await conn.sendMessage(from, pollMessage);

        // Listen for poll response
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.pollVoteMessage) return;

            const selectedOption = msg.message.pollVoteMessage.selectedOptions[0];
            switch (selectedOption) {
                case 'Owner Menu':
                    reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝐀𝐈 𝐒𝐘𝐒𝐓𝐄𝐌*⤵*`);
                    break;
                case 'Group Menu':
                    reply(`💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 content here`);
                    break;
                case 'Download Menu':
                    reply(`💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 content here`);
                    break;
                case 'Other Menu':
                    reply(`💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 content here`);
                    break;
                default:
                    reply("Invalid selection. Please select a valid option.");
            }
        });

    } catch (err) {
        console.error(err);
        reply("An error occurred.");
    }
});
