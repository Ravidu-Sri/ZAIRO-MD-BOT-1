const { cmd } = require('../command');  // command නිර්මාණය සඳහා
const ownerNumber = "94776734030@s.whatsapp.net",94762983012@s.whatsapp.net";  // ඔබේ අංකය

// Owner-only command
cmd({
    pattern: "owner",
    react: "👑",
    desc: "Owner-only command",
    category: "special",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        // Owner verification
        if (sender !== ownerNumber) {
            reply("රීනේම් කරලා බොටාව");
            return;
        }

        // Command logic (මෙහි ඔබට අවශ්‍ය විධාන සකසා ගත හැක)
        reply("බොට්ගේ සම්පූර්න අයිතිය ඇත්තේ 𝚂𝙻 𝙻𝙴𝙶𝙴𝙽𝚉 𝙵𝙰𝙼𝙸𝙻𝚈 𝙾𝚆𝙽𝙴𝚁 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂 සතුය. https://wa.me/94776734030");
        
    } catch (e) {
        console.log(e);
        reply(`දෝෂයක්: ${e.message}`);
    }
});