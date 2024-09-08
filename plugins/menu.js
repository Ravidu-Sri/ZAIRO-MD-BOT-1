const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const os = require('os');
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

        const msg = `✦ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`;

        // SD සහ HD URL එක verify කරලා ඕනේ විදිහට නිර්වචනය කරන්න.
        const result = {
            sd: 'sd_video_url',  // මේ URL replace කරන්න
            hd: 'hd_video_url',  // මේ URL replace කරන්න
            thumbnail: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'  // මේකත් replace කරන්න
        };

        // Button object එක නිසි ලෙස ක්‍රියාත්මක කරනවා.
        const buttons = [
            {
                buttonId: '1',
                buttonText: { displayText: 'Watch on Facebook' },
                type: 1
            },
            {
                buttonId: '2',
                buttonText: { displayText: 'SD Quality' },
                type: 1
            },
            {
                buttonId: '3',
                buttonText: { displayText: 'HD Quality' },
                type: 1
            }
        ];

        // message object එක නිසි ලෙස නිර්මාණය කරගන්න.
        const message = {
            image: { url: result.thumbnail },
            caption: msg,
            footer: config.FOOTER,
            buttons: buttons,
            headerType: 4
        };

        return conn.sendMessage(from, message, { quoted: mek || null });

    } catch (e) {
        console.error(e);
        reply(`දෝෂයක්: ${e.message}`);
    }
});
