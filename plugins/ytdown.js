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

> 📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_

> ⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_

> ⏱️ *𝗔𝗴𝗼*: _${data.ago}_

> 👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_

> 🔗 *𝗟𝗶𝗻𝗸*: ${url}

⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵

මෙම ගීතය ඩවුන්ලෝඩ් කිරීමට මෙම මැසේජ් එකට රිප්ලයි කර අදාල Song ටයිප් එකේ නම්බර් එක ටයිප් කර Send කරන්න

*1 🎧 Audio Type*

*2 💾 Document Type*

> 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

        // Send video details with thumbnail
        const sentMsg = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Wait for reply with "1"
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            // Check if the message is a reply to the thumbnail message and contains "yes"
            if (msg.message && msg.message.extendedTextMessage && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id &&
                msg.message.extendedTextMessage.text.toLowerCase() === '1') {
                
                // If reply is "1", start downloading
                let down = await fg.yta(url);
                let downloadUrl = down.dl_url;

                await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" },{react:"⤵️"}, { quoted: mek });
            }
        });


// Wait for reply with "2"
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            // Check if the message is a reply to the thumbnail message and contains "yes"
            if (msg.message && msg.message.extendedTextMessage && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id &&
                msg.message.extendedTextMessage.text.toLowerCase() === '2') {
                
                // If reply is "yes", start downloading
                let down = await fg.yta(url);
                let downloadUrl = down.dl_url;

                await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "audio/mpeg", fileName: `${data.title}.mp3`, caption: "𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎" }, { quoted: mek });
            }
        });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});





cmd({
    pattern: "video",
    react: "🎬",
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
 ~*𝙕𝘼𝙄𝙍𝙊 𝙈𝘿 𝙑𝙄𝘿𝙀𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿⤵⤵ 🎧*~

> 🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_

> 👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_

> 📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_

> ⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_

> ⏱️ *𝗔𝗴𝗼*: _${data.ago}_

> 👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_

> 🔗 *𝗟𝗶𝗻𝗸*: ${url}

⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵

මෙම විඩියෝව ඩවුන්ලෝඩ් කිරීමට මෙම මැසේජ් එකට රිප්ලයි කර අදාල Video ටයිප් එකේ නම්බර් එක ටයිප් කර Send කරන්න

*1 🎬 Video Type*

*2 💾 Document Type*

> 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

        // Send video details with thumbnail
        const sentMsg = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Wait for reply with "1"
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            // Check if the message is a reply to the thumbnail message and contains "yes"
            if (msg.message && msg.message.extendedTextMessage && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id &&
                msg.message.extendedTextMessage.text.toLowerCase() === '1') {
                
                // If reply is "1", start downloading
              
        // Download and send video
        let down = await fg.ytv(url);
        // Filter to get the 480p quality video URL
        80p quality video URL
let downloadUrl240 = down.formats.find(format => format.qualityLabel === '240p')?.url;
80p quality video URL
let downloadUrl360 = down.formats.find(format => format.qualityLabel === '360p')?.url;
let downloadUrl480 = down.formats.find(format => format.qualityLabel === '480p')?.url;
80p quality video URL
let downloadUrl720 = down.formats.find(format => format.qualityLabel === '720p')?.url;
80p quality video URL
let downloadUrl1080 = down.formats.find(format => format.qualityLabel === '1080p')?.url;

if (downloadUrl) {
    // Send the video in 240p
    await conn.sendMessage(from, { video: { url: downloadUrl240 }, mimetype: "video/mp4" }, {react:"⤵️"}, { quoted: mek });
} else {
    reply('240p quality is not available for this video.');
    
    await conn.sendMessage(from, { video: { url: downloadUrl360 }, mimetype: "video/mp4" }, {react:"⤵️"}, { quoted: mek });
} else {
    reply('360p quality is not available for this video.');
    
    await conn.sendMessage(from, { video: { url: downloadUrl480 }, mimetype: "video/mp4" }, {react:"⤵️"}, { quoted: mek });
} else {
    reply('480p quality is not available for this video.');
    
    await conn.sendMessage(from, { video: { url: downloadUrl720 }, mimetype: "video/mp4" }, {react:"⤵️"}, { quoted: mek });
} else {
    reply('7200p quality is not available for this video.');
    
    await conn.sendMessage(from, { video: { url: downloadUrl1080 }, mimetype: "video/mp4" }, {react:"⤵️"}, { quoted: mek });
} else {
    reply('1080p quality is not available for this video.');
    
}   
            }
        });


// Wait for reply with "2"
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            // Check if the message is a reply to the thumbnail message and contains "yes"
            if (msg.message && msg.message.extendedTextMessage && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id &&
                msg.message.extendedTextMessage.text.toLowerCase() === '2') {
                
                // If reply is "yes", start downloading
                let down = await fg.yta(url);
                let downloadUrl = down.dl_url;

                await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "video/mp4", fileName: `${data.title}.mp4`, caption: "𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎" }, { quoted: mek });
            }
        });
        
        
        
        
        
        let down = await fg.ytv(url); // ytv to download video



    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});