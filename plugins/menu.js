const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const os = require("os");
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

        // Unified event listener to handle different menu options
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            if (msg.message && msg.message.extendedTextMessage && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                const selectedOption = msg.message.extendedTextMessage.text.trim().toLowerCase();

                switch (selectedOption) {
                    case '1':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*OWNERMENU*⤵️⤵️`);
                        break;
                    case '2':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*GROUPMENU*⤵️⤵️`);
                        break;
                    case '3':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*DOWNLOADMENU*⤵️⤵️`);
                        break;
                    case '4':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*OTHERMENU*⤵️⤵️`);
                        break;
                    default:
                        reply("Invalid option. Please select a valid menu option (1-4).");
                }
            }
        });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
            // Check if the message is a reply to the thumbnail message and contains "yes"
            if (msg.message && msg.message.extendedTextMessage && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id &&
                msg.message.extendedTextMessage.text.toLowerCase() === '4') {
                
                ✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸
             ⤵️⤵️*OWNERMENU⤵*⤵️⤵️4
             
                         }
        });


        
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
