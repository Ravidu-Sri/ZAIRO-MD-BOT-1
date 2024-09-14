const fs = require('fs');
const path = require('path');
const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

// Define the owner number here (you can replace it with the actual number)
const ownerNumber = '1234567890@s.whatsapp.net';  // replace with the owner's WhatsApp number

// Auto-forward view-once photo or video to the owner
cmd({
    on: "body"
}, async (conn, mek, m, { from, body, isOwner, senderNumber }) => {
    
    // Check if the message contains view-once media (photo or video)
    if (mek.message && mek.message.viewOnceMessage && mek.message.viewOnceMessage.message) {
        const mediaMessage = mek.message.viewOnceMessage.message;

        // Media detection: Check if it's an image or video
        if (mediaMessage.imageMessage) {
            // It's a view-once photo, forward it to the owner
            await conn.sendMessage(from, { image: mediaMessage.imageMessage }, { quoted: mek });
        } else if (mediaMessage.videoMessage) {
            // It's a view-once video, forward it to the owner
            await conn.sendMessage(from,, { video: mediaMessage.videoMessage }, { quoted: mek });
        }
    }
});