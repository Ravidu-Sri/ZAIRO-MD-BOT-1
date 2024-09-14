const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const EnvVar = require('../lib/mongodbenv');





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

const config = await readEnv();


let work;
switch (config.MODE) {
    case 'public':
        work = '𝐁𝐎𝐓 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄 𝐏𝐔𝐁𝐋𝐈𝐂🌎';
        break;
    case 'private':
        work = '𝐁𝐎𝐓 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄 𝐏𝐑𝐈𝐕𝐀𝐓𝐄👤';
        break;
    case 'groups':
        work = '𝐁𝐎𝐓 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄 𝐆𝐑𝐎𝐔𝐏𝐒 𝐎𝐍𝐋𝐘👥';
        break;
    case 'inbox':
        work = '𝐁𝐎𝐓 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄 𝐈𝐍𝐁𝐎𝐗 𝐎𝐍𝐋𝐘🫂';
        break;
    default:
        work = '𝐌𝐎𝐃𝐄 𝐔𝐍𝐊𝐍𝐎𝐖𝐍 🛑';
};


let autoStatus = config.AUTO_READ_STATUS === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐄𝐍 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐄𝐍 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐅𝐅🛑';

let autoVoice = config.AUTO_VOICE === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐕𝐎𝐈𝐂𝐄 𝐌𝐒𝐆 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐕𝐎𝐈𝐂𝐄 𝐌𝐒𝐆 𝐎𝐅𝐅🛑';

let autoSticker = config.AUTO_VOICE === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐒𝐆 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐒𝐆 𝐎𝐅𝐅🛑';

let autoReply = config.AUTO_VOICE === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐑𝐄𝐏𝐋𝐘 𝐌𝐒𝐆 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐑𝐄𝐏𝐋𝐘 𝐌𝐒𝐆 𝐎𝐅𝐅🛑';

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' },
            caption: `✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ⚙️\n
> *${work}*

> *${autoVoice}*

> *${autoSticker}*

> *${autoReply}*

> *${autoStatus}*

> 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗

_*BOT WORK TYPE *_⤵️

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