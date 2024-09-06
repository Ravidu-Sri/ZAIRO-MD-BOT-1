const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('message', async msg => {
    // "viewonce" command එක සහ mentions තිබේදැයි පරීක්ෂා කරන්න
    if (msg.body.startsWith('ve') && msg.mentionedJidList.length > 0) {
        try {
            // View Once media එක ලබා ගන්න
            const viewOnceMessage = msg;

            if (viewOnceMessage.isViewOnce) {
                // View Once media එක download කර සහ සුරකින්න
                const mediaFile = await viewOnceMessage.downloadMedia();
                const fileName = `viewonce_${Date.now()}.${mediaFile.mimetype.split('/')[1]}`;
                fs.writeFileSync(path.join(__dirname, fileName), mediaFile.data, 'base64');

                // සුරක්ෂිත කළ media file එක පසු කෙරෙමින් යැවීම
                client.sendMessage(msg.from, fs.readFileSync(path.join(__dirname, fileName)), { caption: '📥 View Once media saved' });

                // සාර්ථකව සුරකින බව පදනම් කරන්න
                client.sendMessage(msg.from, '✅ View Once media has been successfully saved.');
            } else {
                client.sendMessage(msg.from, '⚠️ This is not a View Once message.');
            }
        } catch (e) {
            console.error(e);
            client.sendMessage(msg.from, `Error: ${e}`);
        }
    }
});

client.initialize();