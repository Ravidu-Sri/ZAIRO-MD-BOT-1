const { fetchJson } = require('../lib/functions');
const config = require('../config');
const { cmd } = require('../command');

let baseUrl;

let baseUrl1;

// Fetch base URL on startup
(async () => {
    try {
        const baseUrlGet = await fetchJson('https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json');
        baseUrl = baseUrlGet.api;
    } catch (error) {
        console.error('Failed to fetch base URL:', error);
    }
})();


(async () => {
    try {
        const baseUrlGet1 = await fetchJson('https://api125-89403c44afcf.herokuapp.com/api/instagram-download?url=https://www.instagram.com/p/example');
        baseUrl1 = baseUrl1Get.api;
    } catch (error) {
        console.error('Failed to fetch base URL:', error);
    }
})();

const yourName = "*✸𝘝𝘐𝘔𝘈 𝘔𝘋 𝘉𝘖𝘛✸*/n/n";

// Command to download Facebook videos
cmd({
    pattern: "fb",
    react:"⬇️",
    alias: ["facebook"],
    desc: "Download FB videos",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) {
            return reply("*Please provide a valid link(කරුණාකර නිවරදි ලින්ක් එකක් ඇතුලත් කරන්න 🚫*\nExample: .fb (fb video link)");
        }

        const data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`);
        reply("*𝘝𝘐𝘔𝘈 𝘔𝘋  𝘍𝘉 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎..... 📥*");

        if (data.data.hd) {
            await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `📺ZAIRO MD FB HD VIDEO 🚀✨🎥\n\n ${yourName}` }, { quoted: mek });
        } else if (data.data.sd) {
            await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: `📱ZAIRO MD FB SD VIDEO 🎬⚡📥\n\n ${yourName}` }, { quoted: mek });
        }
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// Command to download TikTok videos
cmd({
    pattern: "tiktok",
    alias: ["tt"],
    react:"⬇️",
    desc: "Download TikTok videos",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) {
            return reply("*Please provide a valid link කරුණාකර නිවරදි ලින්ක් එකක් ඇතුලත් කරන්න 🚫*\nExample: .tiktok (tiktok video link)");
        }

        const data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`);
        reply("*𝘝𝘐𝘔𝘈 𝘔𝘋 𝘛𝘐𝘒𝘛𝘖𝘒 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎....( 𝘕𝘖 𝘞𝘈𝘛𝘌𝘙 𝘔𝘈𝘙𝘒 ) 📥*");

        if (data.data.no_wm) {
            await conn.sendMessage(from, { video: { url: data.data.no_wm }, mimetype: "video/mp4", caption: `🚀 𝘕𝘰 𝘞𝘢𝘵𝘦𝘳 𝘔𝘢𝘳𝘬 𝘝𝘪𝘥𝘦𝘰 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 🎵✨📥\n\n ${yourName}` }, { quoted: mek });
        } else if (data.data.wm) {
            await conn.sendMessage(from, { video: { url: data.data.wm }, mimetype: "video/mp4", caption: `🚀 𝘞𝘪𝘵𝘩 𝘞𝘢𝘵𝘦𝘳 𝘔𝘢𝘳𝘬 𝘝𝘪𝘥𝘦𝘰 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 🎵✨📥\n\n ${yourName}` }, { quoted: mek });
        } else if (data.data.audio) {
            await conn.sendMessage(from, { audio: { url: data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek });
        }
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// Command to download Twitter videos
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    react:"⬇️",
    desc: "Download Twitter videos",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) {
            return reply("*Please provide a valid link කරුණාකර නිවරදි ලින්ක් එකක් ඇතුලත් කරන්න🚫*\nExample: .twitter (twitter video link)");
        }

        const data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`);
        reply("*𝘝𝘐𝘔𝘈 𝘔𝘋 𝘛𝘞𝘐𝘛𝘛𝘌𝘙𝘙 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎... 📥*");

        if (data.data.data.HD) {
            await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `📺 𝘝𝘐𝘔𝘈 𝘔𝘋 𝘛𝘸𝘪𝘵𝘵𝘦𝘳 𝘏𝘋 𝘘𝘶𝘭𝘪𝘵𝘺 𝘝𝘪𝘥𝘦𝘰 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥🚀✨🎥\n\n ${yourName}` }, { quoted: mek });
        } else if (data.data.data.SD) {
            await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `📱𝘝𝘐𝘔𝘈 𝘔𝘋 𝘛𝘸𝘪𝘵𝘵𝘦𝘳 𝘚𝘋 𝘘𝘶𝘭𝘪𝘵𝘺 𝘝𝘪𝘥𝘦𝘰 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 🎬⚡📥\n\n ${yourName}` }, { quoted: mek });
        } else if (data.data.data.audio) {
            await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek });
        }
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// Command to download Google Drive files
cmd({
    pattern: "gdrive",
    react:"⬇️",
    alias: ["googledrive"],
    desc: "Download Google Drive files",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) {
            return reply("*Please provide a valid link කරුණාකර නිවරදි ලින්ක් එකක් ඇතුලත් කරන්න 🚫*\nExample: .gdrive (gdrive link)");
        }

        const data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`);
        reply("*𝘝𝘐𝘔𝘈 𝘔𝘋 𝘎𝘋𝘳𝘪𝘷𝘦 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘪𝘯𝘨...... 📥*");

        if (data.data.download) {
            await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek });
        }
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// Command to download MediaFire files
cmd({
    pattern: "mediafire",
    react:"⬇️",
    alias: ["mfire"],
    desc: "Download MediaFire files",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) {
            return reply("*Please provide a valid link කරුණාකර නිවරදි ලින්ක් එකක් ඇතුලත් කරන්න 🚫*\nExample: .mediafire (mediafire link)");
        }

        const data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`);
        reply("*𝘝𝘐𝘔𝘈 𝘔𝘋 𝘔𝘌𝘋𝘐𝘈𝘍𝘐𝘙𝘌 𝘍𝘐𝘓𝘌 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎...📥*");

        if (data.data.link_1) {
            await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: `${data.data.name}\n\n${yourName}` }, { quoted: mek });
        }
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// 𝘪𝘯𝘴𝘵𝘢 𝘷𝘪𝘥𝘦𝘰 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎....


cmd({
    pattern: "insta",
    react:"⬇️",
    alias: ["instagram"],
    desc: "Download insta videos",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) {
            return reply("*Please provide a valid link(කරුණාකර නිවරදි ලින්ක් එකක් ඇතුලත් කරන්න 🚫*\nExample: .insta (insta video link)");
        }

        const data = await fetchJson(`${baseUrl1}/api/fdown?url=${q}`);
        reply("*𝘝𝘐𝘔𝘈 𝘔𝘋  𝘍𝘉 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎..... 📥*");

        if (data.data.hd) {
            await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `📺 𝘝𝘐𝘔𝘈 𝘔𝘋 𝘏𝘋 𝘝𝘐𝘋𝘌𝘖🚀✨🎥\n\n ${yourName}` }, { quoted: mek });
        } else if (data.data.sd) {
            await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: `📱ZAIRO MD FB SD VIDEO 🎬⚡📥\n\n ${yourName}` }, { quoted: mek });
        }
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});