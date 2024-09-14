const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const EnvVar = require('./mongodbenv');

const config = await readEnv();

let autoVoice = config.AUTO_VOICE === 'true' ? 'AUTO_VOICE is enabled (true)' : 'AUTO_VOICE is disabled (false)';

let autoStatus = config.AUTO_VOICE === 'true' ? 'AUTO_VOICE is enabled (true)' : 'AUTO_VOICE is disabled (false)';



cmd({
    pattern: "settings",
    alias: ["setting","s"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' },
            caption: `✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ⚙️\n
𝙰𝕌𝚃𝙾 𝙰𝚄𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 : ${autoStatus}
𝙰𝕌𝚃𝙾 𝚂𝚃𝙰𝚃𝚄𝚂 𝚁𝙴𝙰𝙳: ${autoVoie}

_*Work Type public, private, groups, inbox*_⤵️

> 🌎 1.1 Public Work

> 👤 1.2 Private Work

> 👥 1.3 Groups Only Work

> 🫂 1.4 Inbox Only Work

_*AUTO VOICE SEND ON/OFF*_⤵️

> 🟢 2.1 Auto Voice On

> 🔴 2.2 Auto Voice Off

_*AUTO STICKER SEND ON/OFF*_⤵️

> 🟢 3.1 Auto Sticker On

> 🔴 3.2 Auto Sticker Off

_*AUTO REPLY SEND ON/OFF*_⤵️

> 🟢 4.1 Auto Reply On

> 🔴 4.2 Auto Reply Off

_*AUTO READ STATUS ON/OFF*_⤵️

> 🟢 5.1 Auto Read Status On

> 🔴 5.2 Auto Read Status Off`
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply('.vimau MODE:public');
                        reply('.restart');
                        break;
                    case '1.2':
                        reply('.vimau MODE:private');
reply('.restart');
                        break;
                    case '1.3':
                        reply('.vimau MODE:groups');
reply('.restart');
                        break;
                    case '1.4':
                        reply('.vimau MODE:inbox');
reply('.restart');
                        break;
                    case '2.1':
                        reply('.vimau AUTO_VOICE:true');
                        break;
                    case '2.2':
                        reply('.vimau AUTO_VOICE:false');
                        break;
                    case '3.1':
                        reply('.vimau AUTO_STICKER:true');
                        break;
                    case '3.2':
                        reply('.vimau AUTO_STICKER:false');
                        break;
                    case '4.1':
                        reply('.vimau AUTO_REPLY:true');
                        break;
                    case '4.2':
                        reply('.vimau AUTO_REPLY:false');
                        break;
                    case '5.1':
                        reply('.vimau AUTO_READ_STATUS:true');
                        break;
                    case '5.2':
                        reply('.vimau AUTO_READ_STATUS:false');
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});