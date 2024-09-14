const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
//const { EnvVar } = require('../plugins/update_env');
const EnvVar = require('../lib/mongodbenv');



cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if(!isOwner) return;

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' },
            caption: status + '\n\n✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ⚙️\n\n

_*Work Type public, private, groups,inbox*_⤵️

> 🌎 1.1 public Work

> 👤 1.2 private Work

> 👥 1.3 Groups Only Work

> 🫂 1.4 Inbox Only Work

_*AUTO VOICE SEND ON OFF*_⤵️

> 🟢 2.1 Auto Voice On

> 🔴 2.2 Auto Voice Off

_*AUTO STICKER SEND ON OFF*_⤵️

> 🟢 3.1 Auto Voice On

> 🔴 3.2 Auto Voice Off

_*AUTO REPLY SEND ON OFF*_⤵️

> 🟢 4.1 Auto Reply On

> 🔴 4.2 Auto Reply Off

_*AUTO READ STATUS ON OFF*_⤵️

> 🟢 5.1 Auto Read Status On

> 🔴 5.2 Auto Read Status Off

' }, { quoted: mek });

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            const selectedOption = msg.message.extendedTextMessage.text.trim();
            
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply('.update MODE:public`);
                        break;
case '1.2':
                        reply('.update MODE:private`);
                        break;
case '1.3':
                        reply('.update MODE:groups`);
                        break;
case '1.4':
                        reply('.update MODE:inbox`);
                        break;
case '2.1':
                        reply('.update AUTO_VOICE:true`);
                        break;
case '2.2':
                        reply('.update AUTO_VOICE:false`);
                        break;
case '3.1':
                        reply('.update AUTO_STICKER:true`);
                        break;
case '3.2':
                        reply('.update AUTO_STICKER:false`);
                        break;
case '4.1':
                        reply('.update AUTO_REPLY:true`);
                        break;
case '4.2':
                        reply('.update AUTO_REPLY:false`);
                        break;
case '5.1':
                        reply('.update AUTO_READ_STATUS:true`);
                        break;
case '5.2':
                        reply('.update AUTO_READ_STATUS:false`);
                        break;
default:
                        reply("Invalid option. Please select a valid  option🔴");
                }
            }
        });



    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});






