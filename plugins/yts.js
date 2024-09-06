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
                            `🔗 *Link*: ${video.url}\n\n`;

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