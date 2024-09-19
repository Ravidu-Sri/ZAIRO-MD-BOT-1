const config = require('../config');
const { cmd, commands } = require('../command');
const { sleep } = require('../lib/functions');

// Register the command for restarting the bot
cmd({
    pattern: "ll",
    desc: "Send view-once image/video for replied message",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        // Check if the message has image or video or is replying to one
        let mediaMessage = m.image || m.video ? m : quoted && (quoted.image || quoted.video) ? quoted : false;

        // If no media is found, reply with an error message
        if (!mediaMessage) {
            return await reply("_Reply to an image or video with a caption!_");
        }

        // Download and save the media
        let mediaPath = await conn.downloadAndSaveMediaMessage(mediaMessage);
        let mediaType = mediaMessage.image ? "image" : "video";

        // If media was successfully downloaded
        if (mediaPath) {
            // Send the media back as a view-once message
            conn.sendMessage(from, {
                [mediaType]: {
                    url: mediaPath
                },
                caption: q || body,  // Use the provided caption or fallback to body
                mimetype: mediaMessage.mimetype,
                fileLength: "99999999",  // File length set to a high value if necessary
                viewOnce: true  // Make it a view-once message
            }, {
                quoted: mediaMessage  // Quote the original message
            });
        } else {
            reply("*Failed to download media!*");
        }
    } catch (e) {
        // Handle errors and notify the user
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
