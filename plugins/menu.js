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

        // RAM usage
        const msg = `\`✦ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦\`
`

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Watch on Facebook',
                        url: q,
                        merchant_url: q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SD Quality",
                        id: ".downfb " + result.sd
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "HD Quality",
                        id: ".downfb " + result.hd
                    }),
                }
                ]
                let message = {
                    image: result.thumbnail,
                    header: '',
                    footer: config.FOOTER,
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)
            }).catch((err) => {
                console.log(err)
            })

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
