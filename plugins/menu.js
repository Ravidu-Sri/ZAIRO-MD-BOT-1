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

මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️


 1 💥𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔⤵💥

 2 💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔⤵💥
 
 3 💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔⤵💥
 
 4 💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔⤵💥


*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*`

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            const selectedOption = msg.message.extendedTextMessage.text.trim();
            
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝐀𝐈 𝐒𝐘𝐒𝐓𝐄𝐌*⤵*

💥𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔💥

> *_.restart_*
Ex.( .restart )
Bot Restart කරයි✅

> *-.settings-*
Ex. ( .settings )
Botගේ සෙටින් ලබා දෙයි✅

> *_.system_*
Ex.( .restart )
Bot විස්තර ලබා දෙයි✅

> *-.ping-*
Ex. ( .ping )
Bot Speed පෙන්වයි✅

> *_.alive_*
Ex.( .alive )
Bot Online සිටින බව පෙන්වයි✅

> *-.vima-*
Ex. ( .vima )
Bot අයිතිකරුගේ විස්තර ලබා දෙයි✅







`);
                        break;
                    case '2':
                        reply(`💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔💥

> *_.add_*
Ex.( .add 94776734030 )
ගෲපයේ නැති සමාජිකයෙක් Add කරයි.

> *_.promote_*
 Ex.( .promote @mention member )
ගෲපයේ සමාජිකයෙක් Admin බල තල ලබාදෙයි.✅

> *_.demote_*
 Ex.( .demote @mention member )
ගෲපයේ සමාජිකයෙක් Admin බල තල ඉවත් කරයි.✅

> *_.setabout_*
 Ex.( .setabout ZAIRO MD )
ගෲපයේ ඇති Bio එක වෙනස් කරයි.✅.

> *_.setname_*
 Ex.( .setname ZAIRO MD )
ගෲපයේ ඇති නම වෙනස් කරයි.✅.

> *_.tagall_*
Ex.( .tagall )
ගෲපයේ සියලුම සමාජිකකයන් එක වර ටැග් කරයි.✅

> *_.grouplink_*
Ex.( .grouplink )
ඔබ සිටින ගෲපයේ ලින්ක් එක ලබා දෙයි.✅

> *_.mute_*
Ex.( .mute )
ගෲපය වසා දමයි.✅ 

> *_.unmute_*
Ex.( .upmute )
ගෲපය නැවත Open කරයි✅ 

> *_.kick_*
Ex.( .kick @9477xxxxxxx )
ගෲපය Tag කරන සාමාජිකයා ඉවත් කරයි.✅ 

> *_.kickall_*
Ex.( .kickall )
ගෲපයේ සියලුම සාමාජිකයන් එකවර ඉවත් කරයි.✅ 

> *_.endgroup_*
Ex.( .endgroup )
ගෲපය අවසාන කර දමයි.✅ 

> *_.delall_*
Ex.( .delall )
ගෲපයේ සියලුම මැසේජ් මකා දමයි.✅ 

> *_.gjid_*
Ex.( .gjid )
ගෲපයේ ලිපිනය ලබා දෙයි.✅ 

> *_.left_*
Ex.( .left )
ගෲපයෙන් ඔබ ඉවත් වෙයි.✅ `);
                        break;
                    case '3':
                        reply(`💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔💥

> *_.play_*
Ex.( .play <Song name> )
ඔබ ටයිප් කරන සෝන් එකේ Audio එක පමනක් ලබා දෙයි✅

> *_.song_*
Ex.( .song <Type Song Name> )
ඔබ ටයිප් කරන ගීතය බාගත⬇️ කරයි.✅

> *_.video_*
Ex.( .video <Type Video Name> )
ඔබ ටයිප් කරන විඩියෝව බාගත⬇️ කරයි.✅

> *_.fb_*
Ex.( .fb <Type fb video link> )
ඔබ ටයිප් කරන ගීතය බාගත⬇️ කරයි.✅

> *_.tiktok_*
Ex.( .tiktok <Type Tiktok Link> )
ඔබ ටයිප් කරන ටික්ටොක් විඩියෝව බාගත⬇️ කරයි.✅

> *_.mediafire_*
Ex. ( .mediafire <Enter media fire link> )
ඔබගේ Mediafire File එක බාගත⬇️ කරයි✅

> *_.gdrive_*
Ex. ( .gdrive <Enter Google Drive Link> )
Google drive File එක බාගත⬇️ කරයි✅`);
                        break;
                    case '4':
                        reply(`💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔💥

> *_.ai_*
Ex.( .ai <Hi kohomada> )
Chat gtp ක්‍රියා කරයි✅

> *-.yts-*
Ex. ( .yts <lelena> )
ඔබ ලබා දෙන නමට අදාල විඩියෝ සෝයා දෙයි✅

`);
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

cmd({
    pattern: "sticker",
    alias: ["st"],
    react: "🔗",
    desc: "Convert a replied message to a sticker",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Check if the user replied to a message
        if (!quoted) return await reply("_Reply to a photo, video, or text message._");

        let buff;

        // Check if the replied message is a text message
        if (quoted.mtype === 'conversation' || quoted.mtype === 'extendedTextMessage') {
            // Convert text to an image buffer
            buff = await textToImg(quoted.body);
        } 
        // Check if the replied message is an image or video
        else if (quoted.mtype === 'imageMessage' || quoted.mtype === 'videoMessage') {
            // Download the media content
            buff = await quoted.download();
        } 
        // Check if the replied message is already a sticker
        else if (quoted.mtype === 'stickerMessage') {
            return await reply("_This is already a sticker!_");
        } else {
            return await reply("_Unsupported message type!_");
        }

        // Send the sticker
        await conn.sendMessage(from, { sticker: buff }, { packname: config.PACKNAME, author: config.AUTHOR });

    } catch (e) {
        console.log(e);
        await reply(`Error: ${e}`);
    }
});