const {cmd} = require('../command');

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "🪴",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, reply}) => {
    try {
        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*

> *Uptime:* ${process.uptime()} seconds

> *Used:* ${usedRAM} MB

> *Free:* ${freeRAM} MB

> *Total:* ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂`;

        // Button message
        const buttons = [
            {buttonId: '1', buttonText: {displayText: 'Owner Menu'}, type: 1},
            {buttonId: '2', buttonText: {displayText: 'Group Menu'}, type: 1},
            {buttonId: '3', buttonText: {displayText: 'Download Menu'}, type: 1},
            {buttonId: '4', buttonText: {displayText: 'Other Menu'}, type: 1}
        ];

        const buttonMessage = {
            image: {url: 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg'}, // Replace with your image URL
            caption: status,
            footer: 'Please select a menu:',
            buttons: buttons,
            headerType: 4
        };

        // Send the button message
        await conn.sendMessage(from, buttonMessage, {quoted: mek});
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});