const { cmd, commands } = require('../command');
const {finalMode} = require('../plugins/update_env');



    const finalMode1 = validModes.includes(mode) ? mode : '';

// Default mode to 'public' if MODE environment variable is not set
const MODE = process.env.MODE || '../lib/database';

cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if(!isOwner) return

// Check bot's mode and assign appropriate status
let liveMode;
switch (MODE.toLowerCase()) {
    case 'public':
        liveMode = "Bot is in Public Mode.";
        break;
    case 'private':
        liveMode = "Bot is in Private Mode.";
        break;
    case 'groups':
        liveMode = "Bot is active in Groups only.";
        break;
    case 'inbox':
        liveMode = "Bot is active in Inbox only.";
        break;
    default:
        liveMode = "Mode is not properly set.";
        break;
}

let status = `*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋 𝕊𝔼𝕋𝕋𝕀ℕ𝔾𝕊✸*

> *MODE*: ${finalMode1}

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂'`;

        return await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg' },
            caption: status + '\n\n✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ⚙️\n\n*Cheng Alive&Menu IMG*\n.update ALIVE_IMG: Your Image Url\n\n*Cheng Alive MSG*\n.update ALIVE_MSG: Your Alive MSG\n\n*Cheng Prefix*\n.update PERFIX: your prefix (.,$#%&)\n\n*Auto Status Seen*\n.update AUTO_READ_STATUS: true or false\n\n*Mode*\n.update MODE: private, public, index or group'
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});