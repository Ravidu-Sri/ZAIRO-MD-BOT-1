const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
//const { EnvVar } = require('../plugins/update_env');
const EnvVar = require('../lib/mongodbenv');

/**
 * Fetches an environment variable and lists all existing variables if not found.
 * @param {string} key - The key of the environment variable to fetch.
 * @param {function} reply - Function to send the reply message.
 */


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

// Extract key and value
    const key = q.substring(0, delimiterIndex).trim();
    const value = q.substring(delimiterIndex + 1).trim();

const envVar = await EnvVar.findOne({ key: key });

const allEnvVars = await EnvVar.find({});
            const envList = allEnvVars.map(env => `${env.key}: ${env.value}`).join('\n');
        

        let status = `*✸ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋 𝕊𝔼𝕋𝕋𝕀ℕ𝔾𝕊✸*

        > *MODE*: ${envList}

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