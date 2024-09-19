const config = require('../config');
const { cmd, commands } = require('../command');
const { sleep } = require('../lib/functions');

// Register the command for restarting the bot
cmd({
    pattern: "ll",
    desc: "Restart the bot",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        // Ensure media is replied to
        let mediaMessage = m.image || m.video ? m : m.quoted && (m.quoted.image || m.quoted.video) ? m.quoted : false;
        if (!mediaMessage) {
            return await reply("_Reply to an image or video with a caption!_");
        }

        // Download and save the media
        let mediaPath = await conn.downloadAndSaveMediaMessage(mediaMessage);
        let mediaType = mediaMessage.image ? "image" : "video";

        // If the media was successfully downloaded
        if (mediaPath) {
            conn.sendMessage(from, {
                [mediaType]: {
                    url: mediaPath
                },
                caption: q || body,  // Use the caption provided or the body
                mimetype: mediaMessage.mimetype,
                fileLength: "99999999",  // Adjust file size if necessary
                viewOnce: true
            }, {
                quoted: mediaMessage  // Quote the original media message
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
