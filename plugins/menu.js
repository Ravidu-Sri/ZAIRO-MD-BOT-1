const config = require('../config')
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

මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️


 1 ⤵️⤵️*OWNERMENU⤵*⤵️⤵️

 2 ⤵️⤵️*GROUPMENU⤵*⤵️⤵️
 
 3 ⤵️⤵️*DOWNLOADMENU⤵*⤵️⤵️
 
 4 ⤵️⤵️*CONTACTMENU⤵*⤵️⤵️


*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*`

        // URL of the image you want to include
        const imageUrl = 'https://ibb.co/L86DZLX'; // Replace with your actual image URL

        // Send the image with the status as the caption
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

        // Listening to user replies for menu options
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            if (msg.message && msg.message.extendedTextMessage &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                
                const selectedOption = msg.message.extendedTextMessage.text.toLowerCase();

                // Handling different menu selections
                switch (selectedOption) {
                    case '1':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*OWNERMENU⤵*⤵️⤵️`);
                        break;

                    case '2':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*GROUPMENU⤵*⤵️⤵️\n\n> *_.add_* Ex.( .add 94776734030 )\n> *_.promote_* Ex.( .promote @mention member )\n> *_.demote_* Ex.( .demote @mention member )\n> *_.setabout_* Ex.( .setabout ZAIRO MD )\n> *_.setname_* Ex.( .setname ZAIRO MD )\n> *_.tagall_* Ex.( .tagall )\n> *_.grouplink_* Ex.( .grouplink )\n> *_.mute_* Ex.( .mute )\n> *_.unmute_* Ex.( .upmute )\n> *_.kick_* Ex.( .kick @9477xxxxxxx )\n> *_.kickall_* Ex.( .kickall )\n> *_.endgroup_* Ex.( .endgroup )\n> *_.delall_* Ex.( .delall )\n> *_.gjid_* Ex.( .gjid )\n> *_.left_* Ex.( .left )`);
                        break;

                    case '3':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*DOWNLOADMENU⤵*⤵️⤵️\n\n> *_.song_* Ex.( .song <Type Song Name> )\n> *_.video_* Ex.( .video <Type Video Name> )\n> *_.fb_* Ex.( .fb <Type fb video link> )\n> *_.tiktok_* Ex.( .tiktok <Type Tiktok Link> )\n> *_.mediafire_* Ex. ( .mediafire <Enter media fire link> )\n> *_.gdrive_* Ex. ( .gdrive <Enter Google Drive Link> )`);
                        break;

                    case '4':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸\n⤵️⤵️*CONTACTMENU⤵*⤵️⤵️`);
                        break;

                    default:
                        reply("Invalid option. Please select a valid menu option (1-4).");
                        break;
                }
            }
        });
    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
});