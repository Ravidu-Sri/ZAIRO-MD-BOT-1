const { cmd, commands } = require('../command');
let backupMessages = {};

// Command to listen for messages and back them up
cmd({
    on: 'message-new'
}, async (conn, mek) => {
    const messageId = mek.key.id;
    
    // Back up the message content
    if (mek.message) {
        backupMessages[messageId] = mek;
    }
});

// Command to handle message deletions and resend the deleted message
cmd({
    on: 'message-delete'
}, async (conn, mek) => {
    const deletedMessageId = mek.key.id;

    // Check if the deleted message exists in the backup
    if (backupMessages[deletedMessageId]) {
        const deletedMessage = backupMessages[deletedMessageId];

        // Forward the backed-up message to the sender
        const from = mek.key.remoteJid;
        await conn.sendMessage(from, { text: "This message was deleted, but here is the original content:" });
        
        // Check the type of the original message and resend accordingly
        if (deletedMessage.message.conversation) {
            await conn.sendMessage(from, { text: deletedMessage.message.conversation });
        } else if (deletedMessage.message.imageMessage) {
            await conn.sendMessage(from, { image: deletedMessage.message.imageMessage });
        } else if (deletedMessage.message.videoMessage) {
            await conn.sendMessage(from, { video: deletedMessage.message.videoMessage });
        }
    }
});