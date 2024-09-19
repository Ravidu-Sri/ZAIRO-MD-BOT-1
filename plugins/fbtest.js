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
     
     
     
     let mediaMessage = message.image || message.video ? message : message.reply_message && (message.reply_message.image || message.reply_message.video) ? message.reply_message : false;
     if (!mediaMessage) {
       return await message.reply("_Reply to image/video with caption!_");
     }
     let mediaPath = await message.bot.downloadAndSaveMediaMessage(mediaMessage);
     let mediaType = mediaMessage.image ? "image" : "video";
     if (mediaPath) {
       message.bot.sendMessage(message.chat, {
         [mediaType]: {
           url: mediaPath
         },
         caption: caption,
         mimetype: mediaMessage.mimetype,
         fileLength: "99999999",
         viewOnce: true
       }, {
         quoted: mediaMessage
       });
     
     
     
     
     
     
     
     
     

    } catch (e) {
        // Log any other errors and notify the user
        console.error(e);
        reply(`Error: ${e}`);
    }
});
