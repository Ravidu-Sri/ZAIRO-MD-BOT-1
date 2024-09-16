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

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoVoice = config.AUTO_VOICE === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoSticker = config.AUTO_STICKER === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoReply = config.AUTO_REPLY === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let ownerreact = config.OWNER_REACT === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
let autoreact = config.AUTO_REACT === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' },
            caption: `✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ⚙️\n
🛑 *මෙම පනිවිඩය  විනාඩි 1 කින් ස්වයංක්‍රීයව මකා දමයි*✅

> 𝚆𝙾𝚁𝙺 𝚃𝚈𝙿𝙴 : *${work}*

> 𝙰𝚄𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 : *${autoVoice}*

> 𝙰𝚄𝚃𝙾 𝚂𝚃𝙲𝙺𝙴𝚁 :${autoSticker}*

> 𝙰𝚄𝚃𝙾 𝚁𝙴𝙿𝙻𝚈 : *${autoReply}*

> 𝙰𝚄𝚃𝙾 𝚂𝙴𝙴𝙽 𝚂𝚃𝙰𝚃𝚄𝚂 : *${autoStatus}*

> 𝙰𝚄𝚃𝙾 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙲𝚃 : *${autoreact}*

> 𝙰𝚄𝚃𝙾 𝙾𝚆𝙽𝙴𝚁 𝚁𝙴𝙰𝙲𝚃 : *${ownerreact}*

> 🔗𝘾𝙐𝙎𝙏𝙊𝙈𝙄𝙕𝙀  𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝗦🔗⤵️

_*BOT WORK TYPE*_⤵️

> 🌎 1.1 Public Work (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 👤 1.2 Private Work (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 👥 1.3 Groups Only Work (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 🫂 1.4 Inbox Only Work (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

_*AUTO VOICE SEND ON/OFF*_⤵️

> ♻️ 2.1 Auto Voice On (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 🚫 2.2 Auto Voice Off (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

_*AUTO STICKER SEND ON/OFF*_⤵️

> ♻️ 3.1 Auto Sticker On (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 🚫 3.2 Auto Sticker Off (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

_*AUTO REPLY SEND ON/OFF*_⤵️

> ♻️ 4.1 Auto Reply On (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 🚫 4.2 Auto Reply Off (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

_*AUTO READ STATUS ON/OFF*_⤵️

> ♻️ 5.1 Auto Read Status On (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 🚫 5.2 Auto Read Status Off (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

_*AUTO REACT ON/OFF*_⤵️

> ♻️ 6.1 Auto React On (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 🚫 6.2 Auto React Off (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

_*OWNER REACT ON/OFF*_⤵️

> ♻️ 7.1 Owner React On (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)

> 🚫 7.2 Owner React Off (@ 𝚁𝙴𝙿𝙻𝚈 𝙼𝚂𝙶)`
        }, { quoted: mek });

        // Auto-delete the message after 10 seconds
        setTimeout(async () => {
            await conn.sendMessage(from, { delete: vv.key });
        }, 60000); // 10 seconds timeout for deletion

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
                    case '7.1':
                        reply('.vimau AUTO_REACT:true');
                        break;
                    case '7.2':
                        reply('.vimau AUTO_REACT:false');
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
                // Auto-delete the option selection after 10 seconds
                setTimeout(async () => {
                    await conn.sendMessage(from, { delete: msg.key });
                }, 2000); // 10 seconds timeout for deletion

            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
