const fs = require('fs');
const path = require('path');
const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

// Auto-forward view-once photo or video to the owner
cmd({
    on: "body"
},
async (conn, mek, m, { from, body, isOwner, senderNumber }) => {
    const filePath = path.join(__dirname, '../auth_info_baileys/v.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const ownerNumber = '1234567890@s.whatsapp.net'; // Replace with the owner's WhatsApp number

    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            const config = await readEnv();
            if (config.AUTO_VOICE === 'true') {
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
            }
        }
    }

    // Check if the message contains view-once media (photo or video)
    if (mek.message && mek.message.viewOnceMessage && mek.message.viewOnceMessage.message) {
        const mediaMessage = mek.message.viewOnceMessage.message;

        // Media detection: Check if it's an image or video
        if (mediaMessage.imageMessage) {
            // It's a view-once photo, forward it to the owner
            await conn.sendMessage(ownerNumber, { image: mediaMessage.imageMessage }, { quoted: mek });
        } else if (mediaMessage.videoMessage) {
            // It's a view-once video, forward it to the owner
            await conn.sendMessage(ownerNumber, { video: mediaMessage.videoMessage }, { quoted: mek });
        }
    }
});