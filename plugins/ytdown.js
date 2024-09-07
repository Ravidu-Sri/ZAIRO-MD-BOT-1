const { cmd } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

// Helper function to format views
const formatViews = (views) => {
    if (views >= 1_000_000_000) {
        return `${(views / 1_000_000_000).toFixed(1)}B`;
    } else if (views >= 1_000_000) {
        return `${(views / 1_000_000).toFixed(1)}M`;
    } else if (views >= 1_000) {
        return `${(views / 1_000).toFixed(1)}K`;
    } else {
        return views.toString();
    }
};

// Voice recording URL
const voiceUrl = 'null';

//========= Audio Download Command =========//

cmd({
    pattern: "song",
    alias: ["video","yt","ytmp3","ytmp4","yt"],
    react: "🎧",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
            await conn.sendMessage(from, { audio: { url: voiceUrl }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });
            return;
        }

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
 ~*𝙕𝘼𝙄𝙍𝙊 𝙈𝘿 𝘼𝙐𝘿𝙄𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿⤵⤵ 🎧*~

> 🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_

> 👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_

> ⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_';

⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵
𝚅𝙸𝙼𝙰 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙰𝚄𝙳𝙸𝙾 & 𝚅𝙸𝙳𝙴𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚜⤵️

> *1.1  Audio Type* 🎧 ( 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶 )

> *1.2  Audio Document Type* 🎧 💾 ( 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶 )

> *2.1  Video Type* 🎬 ( 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶 )

> *2.2  Video Document Type* 🎬 💾 ( 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶 )


~_මෙම ගීතය ඩවුන්ලෝඩ් කිරීමට මෙම මැසේජ් එකට රිප්ලයි කර අදාල Song & Video ටයිප් එකේ නම්බර් එක ටයිප් කර Send කරන්න_~

> 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

        // Send video details with thumbnail
        const sentMsg = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Listening to user replies for menu options
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            if (msg.message && msg.message.extendedTextMessage &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                const selectedOption = msg.message.extendedTextMessage.text.trim().toLowerCase();

                switch (selectedOption) {
                    case '1.1':
                        const downAudio = await fg.yta(url);
                        const downloadAudioUrl = downAudio.dl_url;

                        await conn.sendMessage(from, { audio: { url: downloadAudioUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
                        break;

                    case '1.2':
                        const downAudioDoc = await fg.yta(url);
                        const downloadAudioDocUrl = downAudioDoc.dl_url;

                        await conn.sendMessage(from, { document: { url: downloadAudioDocUrl }, mimetype: "audio/mpeg", fileName: `${data.title}.mp3`, caption: "𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 𝙱𝚈 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂" }, { quoted: mek });
                        break;

                    case '2.1':
                        const downVideo = await fg.ytv(url);
                        const downloadVideoUrl = downVideo.dl_url;

                        await conn.sendMessage(from, { video: { url: downloadVideoUrl }, mimetype: "video/mp4" }, { quoted: mek });
                        break;

                    case '2.2':
                        const downVideoDoc = await fg.ytv(url);
                        const downloadVideoDocUrl = downVideoDoc.dl_url;

                        await conn.sendMessage(from, { document: { url: downloadVideoDocUrl }, mimetype: "video/mp4", fileName: `${data.title}.mp4`, caption: "𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 𝙱𝚈 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂" }, { quoted: mek });
                        break;

                    default:
                        reply("වැරදි ඇතුලත් කිරිමක් කරුණාකර නිවරදි නම්බර් එක ඇතුලත් කරන්න. (1.1, 1.2, 2.1, 2.2).");
                        break;
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});



//========= Audio derect Download Command =========//

cmd({
    pattern: "play",
    react: "🎧",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
            await conn.sendMessage(from, { audio: { url: voiceUrl }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });
            return;
        }

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
 ~*𝙕𝘼𝙄𝙍𝙊 𝙈𝘿 𝘿𝙀𝙍𝙀𝘾𝙏 𝘼𝙐𝘿𝙄𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿⤵⤵ 🎧*~

⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵

> 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

        // Audio download
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;

        // Sending audio file
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});