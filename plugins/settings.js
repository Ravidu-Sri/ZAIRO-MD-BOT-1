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
        }

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐄𝐍 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐄𝐍 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐅𝐅🛑';
        let autoVoice = config.AUTO_VOICE === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐕𝐎𝐈𝐂𝐄 𝐌𝐒𝐆 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐕𝐎𝐈𝐂𝐄 𝐌𝐒𝐆 𝐎𝐅𝐅🛑';
        let autoSticker = config.AUTO_STICKER === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐒𝐆 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐒𝐆 𝐎𝐅𝐅🛑';
        let autoReply = config.AUTO_REPLY === 'true' ? '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐑𝐄𝐏𝐋𝐘 𝐌𝐒𝐆 𝐎𝐍✅' : '𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 𝐑𝐄𝐏𝐋𝐘 𝐌𝐒𝐆 𝐎𝐅𝐅🛑';
let ownerreact = config.OWNER_REACT === 'true' ? '𝐎𝐖𝐍𝐄𝐑 𝐑𝐄𝐀𝐂𝐓 𝐎𝐍✅' : '𝐎𝐖𝐍𝐄𝐑 𝐑𝐄𝐀𝐂𝐓 𝐎𝐅𝐅🛑';

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' },
            caption: `✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ⚙️\n
> *${work}*

> *${autoVoice}*

> *${autoSticker}*

> *${autoReply}*

> *${autoStatus}*

> *${ownerreact}*

> 🔗𝘾𝙐𝙎𝙏𝙊𝙈𝙄𝙕𝙀 𝙕𝘼𝙄𝙍𝙊 𝙈𝘿 𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝙎🔗⤵️

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

> 🔴 5.2 Auto Read Status Off

_*OWNER REACT ON/OFF*_⤵️

> 🟢 6.1 Owner React On

> 🔴 6.2 Owner React Off`
        }, { quoted: mek });

conn.ev.on('messages.upsert', async (msgUpdate) => {
    const msg = msgUpdate.messages[0];
    
    // Message එක long එකක්ද බලමු
    if (msg.message && msg.message.conversation) {
        const from = msg.key.remoteJid;
        const messageText = msg.message.conversation;

        // Long message detection & split-and-send function එකක් භාවිතා කිරීම
        await splitAndSendMessage(conn, from, messageText);
    }
});


const splitAndSendMessage = async (conn, from, longText) => {
    // Text එක 1024 characters සීමාවෙන් අධිකද බලමු
    const maxMessageLength = 1024;

    if (longText.length > maxMessageLength) {
        // Text එක හරහට කපා smaller messages වලින් යවන්න
        const messageParts = longText.match(new RegExp('.{1,' + maxMessageLength + '}', 'g'));
        
        // සියලු කොටස් sequential ලෙස යවන්න
        for (const part of messageParts) {
            await conn.sendMessage(from, { text: part });
        }
    } else {
        // Text එක සීමාවෙන් අඩුනම්, තනි message එකක් ලෙස යවන්න
        await conn.sendMessage(from, { text: longText });
    }
};


        // Auto-delete the message after 10 seconds
        setTimeout(async () => {
            await conn.sendMessage(from, { delete: vv.key });
        }, 10000); // 10 seconds timeout for deletion

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
                  case '6.1':
                        reply('.vimau OWNER_REACT:true');
                        break;
                    case '6.2':
                        reply('.vimau OWNER_REACT:false');
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
                // Auto-delete the option selection after 10 seconds
                setTimeout(async () => {
                    await conn.sendMessage(from, { delete: msg.key });
                }, 10000); // 10 seconds timeout for deletion
            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
