const config = require('../config')
const { cmd, commands } = require('../command')
const os = require("os")
const { runtime } = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "🪴",
    desc: "Check all menus",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, reply }) => {
    try {
        // RAM usage
        const totalRAM = Math.round(os.totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*

> *Uptime:* ${runtime(process.uptime())}

> *Used*: ${usedRAM} MB

> *Free*: ${freeRAM} MB

> *Total*: ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙈𝙰𝙼𝙾𝙳𝚂

මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️

1 💥𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥
2 💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵💥
3 💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵💥
4 💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥

*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*`;

        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

        // Create a handler to listen for specific messages as replies
        const filterMessage = (message) => {
            return message.key && message.key.remoteJid === from && message.message && message.message.conversation;
        };

        const msgListener = conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            if (filterMessage(msg)) {
                const selectedOption = msg.message.conversation.toLowerCase();

                switch (selectedOption) {
                    case '1':
                        await reply("✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ - 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔⤵");
                        break;

                    case '2':
                        await reply("𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵\n\n... Group menu details ...");
                        break;

                    case '3':
                        await reply("𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵\n\n... Download menu details ...");
                        break;

                    case '4':
                        await reply("𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵\n\n... Other menu details ...");
                        break;

                    default:
                        await reply("Invalid option. Please select a valid menu option (1-4).");
                        break;
                }
                // Remove listener after receiving the response to prevent further actions
                conn.ev.off('messages.upsert', msgListener);
            }
        });
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});