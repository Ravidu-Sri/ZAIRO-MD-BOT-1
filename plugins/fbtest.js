const { cmd, commands } = require('../command');

// Store tagged messages for resending
let taggedMessages = {};

// Command to capture and store the image when tagged with "vv"
cmd({
    pattern: "vv",
    fromMe: true
}, async (conn, mek) => {
    // Check if the message contains an image
    if (mek.message && mek.message.imageMessage) {
        // Store the image message using the sender's number as the key
        taggedMessages[mek.key.remoteJid] = mek.message.imageMessage;

        // Send confirmation to the sender
        await conn.sendMessage(mek.key.remoteJid, { text: "Image has been tagged and stored!" });
    } else {
        await conn.sendMessage(mek.key.remoteJid, { text: "No image found in the message to tag." });
    }
});

// Command to resend the tagged image to the user
cmd({
    pattern: "resend",
    fromMe: true
}, async (conn, mek) => {
    // Check if there's a stored image for the user
    const imageMessage = taggedMessages[mek.key.remoteJid];

    if (imageMessage) {
        // Resend the tagged image
        await conn.sendMessage(mek.key.remoteJid, { image: imageMessage }, { quoted: mek });

        // Optionally, send a confirmation message
        await conn.sendMessage(mek.key.remoteJid, { text: "Here is the image you tagged earlier." });
    } else {
        await conn.sendMessage(mek.key.remoteJid, { text: "No tagged image found to resend." });
    }
});