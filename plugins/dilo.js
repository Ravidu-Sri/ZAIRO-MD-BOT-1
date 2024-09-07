const config = require('../config')
const {cmd, commands} = require('../command')

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
        const audioUrl = 'https://drive.google.com/uc?export=download&id=1YYPnkKWdrxFe8C2kWdwf8qkeE0PO5RjW';

        // Check if mek is valid before using it
        const quotedMessage = mek ? mek : null;

        // Send the image with the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: quotedMessage });

        // Send the voice recording
     //   await conn.sendMessage(from, {
         //   audio: { url: audioUrl }, 
      //      mimetype: 'audio/mp4', // Adjust this if your //audio file is in another format
          //  ptt: true // This makes the audio act like a voice note
     //   }, { quoted: quotedMessage });

    } catch (e) {
        console.error('Error sending message:', e);
        reply(`An error occurred: ${e.message}`);
    }
});
