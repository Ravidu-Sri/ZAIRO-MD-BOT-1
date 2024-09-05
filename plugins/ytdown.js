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
const voiceUrl = 'https://drive.google.com/uc?export=download&id=1_Pd4yQVfofr14xPMIOvebVGwoXh1rohu';

//========= Audio Download Command =========//

cmd({
    pattern: "song",
    react:"🎧",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
            await conn.sendMessage(from, { audio: { url: voiceUrl }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });
            return;

cmd({
    pattern: "audio",
    react:"⤵",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
             // Download and send audio
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "audio/mpeg", fileName: `${data.title}.mp3`, caption: "𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎" }, { quoted: mek });

}




        }

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
 ~*𝙕𝘼𝙄𝙍𝙊 𝙈𝘿 𝘼𝙐𝘿𝙄𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿⤵⤵ 🎧*~

> 🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_

> 👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_

> 📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_

> ⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_

> ⏱️ *𝗔𝗴𝗼*: _${data.ago}_

> 👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_

> 🔗 *𝗟𝗶𝗻𝗸*: ${url}

🎼𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

        // Send video details with thumbnail
        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});

//========= Video Download Command =========//

cmd({
    pattern: "video",
    react:"🎧🎬",
    desc: "Download videos",
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
 ~*𝙕𝘼𝙄𝙍𝙊 𝙈𝘿 𝘼𝙐𝘿𝙄𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿⤵⤵ 🎥*~


> 🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_

> 👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_

> 📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_

> ⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_

> ⏱️ *𝗔𝗴𝗼*: _${data.ago}_

> 👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_

> 🔗 *𝗟𝗶𝗻𝗸*: ${url}


𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

        // Send video details with thumbnail
        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Download and send video
        let down = await fg.ytv(url);
        let downloadUrl = down.dl_url;
        await conn.sendMessage(from, { video: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: mek });
        await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "video/mp4", fileName: `${data.title}.mp4`, caption: "🪴 *𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎*" }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});