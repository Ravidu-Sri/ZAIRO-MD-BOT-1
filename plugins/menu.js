const { cmd } = require('../command');
const { runtime } = require('../lib/functions');

// Menu categories
const menuCategory = {
    main: "Main Menu",
    admin: "Admin Commands",
    downloaders: "Downloaders",
    tools: "Tools",
    others: "Other Commands"
};

// Button-based menu command
cmd({
    pattern: "menu",
    react: "📜",
    desc: "Displays a button-based menu",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {

    const buttonMessage = {
        text: "Please select a menu category:",
        footer: "ZAIRO MD BOT",
        buttons: [
            { buttonId: "menu1", buttonText: { displayText: "1. Main Menu" }, type: 1 },
            { buttonId: "menu2", buttonText: { displayText: "2. Admin Commands" }, type: 1 },
            { buttonId: "menu3", buttonText: { displayText: "3. Downloaders" }, type: 1 },
            { buttonId: "menu4", buttonText: { displayText: "4. Tools" }, type: 1 },
            { buttonId: "menu5", buttonText: { displayText: "5. Other Commands" }, type: 1 }
        ],
        headerType: 1
    };

    await conn.sendMessage(from, buttonMessage, { quoted: mek });
});

// Button handler
cmd({
    pattern: "menu1",
    react: "📜",
    desc: "Shows Main Menu",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    let menuText = `*${menuCategory.main}*\n\n🔹 .alive - Check bot status\n🔹 .menu - Show menu options\n`;
    reply(menuText);
});

cmd({
    pattern: "menu2",
    react: "📜",
    desc: "Shows Admin Commands",
    category: "admin",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    let menuText = `*${menuCategory.admin}*\n\n🔹 .promote - Promote a user\n🔹 .demote - Demote a user\n`;
    reply(menuText);
});

cmd({
    pattern: "menu3",
    react: "📜",
    desc: "Shows Downloaders",
    category: "downloaders",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    let menuText = `*${menuCategory.downloaders}*\n\n🔹 .download - Download media\n`;
    reply(menuText);
});

cmd({
    pattern: "menu4",
    react: "📜",
    desc: "Shows Tools",
    category: "tools",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    let menuText = `*${menuCategory.tools}*\n\n🔹 .calc - Use the calculator\n`;
    reply(menuText);
});

cmd({
    pattern: "menu5",
    react: "📜",
    desc: "Shows Other Commands",
    category: "others",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    let menuText = `*${menuCategory.others}*\n\n🔹 .help - Get help\n`;
    reply(menuText);
});