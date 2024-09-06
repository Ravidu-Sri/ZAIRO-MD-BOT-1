const { cmd } = require('../command');
const yts = require('yt-search');
const { fetchJson } = require('../lib/functions');

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

// URL for the voice note
const voiceUrl = 'https://drive.google.com/uc?export=download&id=1_Pd4yQVfofr14xPMIOvebVGwoXh1rohu';

//========= YTS Search Command for Horizontal Frame Layout =========//

cmd({
    pattern: "yts",
    alias: ["yta", "ytv", "yt"],
    desc: "Search and display YouTube video details in a horizontal frame layout",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("Please type a Name or Url... 🤖");

        const search = await yts(q);
        const videos = search.videos.slice(0, 10); // Get only the first 10 videos

        if (videos.length === 0) return reply("No videos found for your query.");

        // Prepare messages with thumbnails and details
        let messageQueue = [];
        for (let video of videos) {
            const message = `🎶 *Title*: _${video.title}_\n` +
                            `👤 *Channel*: _${video.author.name}_\n` +
                            `⏳ *Duration*: _${video.timestamp}_\n` +
                            `👁️ *Views*: _${formatViews(video.views)}_\n` +
                            `🔗 *Link*: ${video.url}\n\n


මෙම විඩියෝව ඩවුන්ලෝඩ් කිරීමට මෙම මැසේජ් එකට රිප්ලයි කර අදාල Song ටයිප් එකේ නම්බර් එක ටයිප් කර Send කරන්න

*1 🎧 Audio Type*

*2 💾 Document Type*

> 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

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

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];

            // Check if the message is a reply to the thumbnail message and contains "yes"
            if (msg.message && msg.message.extendedTextMessage && 
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id &&
                msg.message.extendedTextMessage.text.toLowerCase() === '2') {
                
                // If reply is "2", start downloading
              
        // Download and send video
        let down = await fg.ytv(url);
        let downloadUrl = down.dl_url;
        await conn.sendMessage(from, { video: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: mek });    
            }
        });

            // Collect messages
            messageQueue.push({ image: { url: video.thumbnail }, caption: message });
        }

        // Send images in sequence
        for (let msg of messageQueue) {
            await conn.sendMessage(from, msg, { quoted: mek });
        }

        // Optionally, send the voice note after sending the images
        // Audio url ekak danna

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});