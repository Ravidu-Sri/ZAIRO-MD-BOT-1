const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "kiya",
    desc: "Send a message and auto delete it after 5 seconds",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { 
    from, quoted, body, isCmd, command, args, q, isGroup, 
    sender, senderNumber, botNumber2, botNumber, pushname, 
    isMe, isOwner, groupMetadata, groupName, participants, 
    groupAdmins, isBotAdmins, isAdmins, reply 
}) => {
    try {
        const message = '✅ *Message from bot*: This is the `.kiyaa` command.';

        // Send the message
        const msg = await conn.sendMessage(from, { text: message }, { quoted: mek });

        // Auto-delete the message after 5 seconds for everyone
        setTimeout(async () => {
            await conn.sendMessage(from, {
                delete: { id: msg.key.id, remoteJid: from, fromMe: false }
            });
        }, 5000); // 5000 milliseconds = 5 seconds

    } catch (e) {
        console.error('Error sending message:', e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd({
    pattern: "vima",
    desc: "Check if the bot is online.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { 
    from, quoted, body, isCmd, command, args, q, isGroup, 
    sender, senderNumber, botNumber2, botNumber, pushname, 
    isMe, isOwner, groupMetadata, groupName, participants, 
    groupAdmins, isBotAdmins, isAdmins, reply 
}) => {
    try {
        const status = `
> *Name*: 𝐕𝐈𝐌𝐀𝐌𝐎𝐃𝐒

> *From*: 𝐆𝐀𝐋𝐋𝐄

> *VIMAMOD WhatsApp BOT DEPLOY PAYMENT METHOD*

BOT DEPLOY PRICE:

*Bank payment* = 8023114957
                 Susantha Thilangani
                 Galle Branch
                 Commercial bank   Rs 300/=

*EZ CASH*    =       0762983012     RS 300/=


පේමන්ට් එක කරලා ස්ක්‍රීන් ශොට් එකක් දාන්න

විනාඩි 10ක් ඇතුලත් බොට්ව හදලා දෙනවා

https://wa.me/94776734030

thanks for purchase`;

        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';

        // Check if mek is valid before using it
        const quotedMessage = mek ? mek : null;

        // Send the image with the caption
        const msg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: quotedMessage });

        // Send reply to Vimukthi and Sampath
        const vimukthiMessage = `✅ *Vimukthi* has successfully received the message.`;
        const sampathMessage = `✅ *Sampath* has successfully received the message.`;

        await conn.sendMessage(from, { text: vimukthiMessage }, { quoted: msg });
        await conn.sendMessage(from, { text: sampathMessage }, { quoted: msg });

        // Auto-delete the messages after 5 seconds for everyone
        setTimeout(async () => {
            await conn.sendMessage(from, {
                delete: { id: msg.key.id, fromMe: true }
            });
        }, 5000);

    } catch (e) {
        console.error('Error sending message:', e);
        reply(`An error occurred: ${e.message}`);
    }
});