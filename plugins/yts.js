const { cmd } = require('../command');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
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
                            `🔗 *Link*: ${video.url}\n\n\n` +
                            `මෙම විඩියෝව ඩවුන්ලෝඩ් කිරීමට මෙම මැසේජ් එකට රිප්ලයි කර අදාල Song ටයිප් එකේ නම්බර් එක ටයිප් කර Send කරන්න\n` +
                            `*1 🎧 Audio Type*\n` +
                            `*2 💾 Document Type*\n\n` +
                            `> 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝘽𝙔 𝙑𝙄𝙈𝘼𝙈𝙊𝘿𝙎`;

            // Collect messages
            messageQueue.push({ image: { url: video.thumbnail }, caption: message });
        }

        // Send images in sequence
        let sentMsgs = [];
        for (let msg of messageQueue) {
            const sentMsg = await conn.sendMessage(from, msg, { quoted: mek });
            sentMsgs.push(sentMsg);
        }

        // Event listener to handle replies for download options
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const replyText = msg.message.extendedTextMessage.text.toLowerCase();
            const originalMsg = msg.message.extendedTextMessage.contextInfo.stanzaId;

            // Handle replies for audio and video downloads
            if (sentMsgs.some(sentMsg => sentMsg.key.id === originalMsg)) {
                const videoUrl = msgUpdate.messages[0].text;

                if (replyText === '1') {
                    // Download and send audio
                    const audioStream = ytdl(videoUrl, { filter: 'audioonly' });
                    await conn.sendMessage(from, { audio: { url: audioStream }, mimetype: 'audio/mp4' }, { quoted: mek });
                } else if (replyText === '2') {
                    // Download and send video
                    const videoStream = ytdl(videoUrl);
                    await conn.sendMessage(from, { video: { url: videoStream }, mimetype: 'video/mp4' }, { quoted: mek });
                }
            }
        });

        // Optionally, send the voice note after sending the images
        await conn.sendMessage(from, { audio: { url: voiceUrl }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});