const {readEnv} = require('../lib/database')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["panel","penal","list","allmenu"],
    react: "🪴",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*✸𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 ℤ𝔸𝕀ℝ𝕆 𝕄𝔻 𝔹𝕆𝕋✸*

> *Uptime:* ${runtime(process.uptime())}

> *Used*: ${usedRAM} MB

> *Free*: ${freeRAM} MB

> *Total*: ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂


*✸𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐁𝐘 𝐕𝐈𝐌𝐀𝐌𝐎𝐃𝐒✸*`

     
        

        // Define buttons
       let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "OWNER MENU",
                    onButtonReply("OWNER MENU"),
                    id: "vimu1"
                }),
            },


            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "GROUP MENU",
                    id: "vimu2"
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "DOWNLOAD MENU",
                    id: "vimu3 "
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "OTHER MENU",
id: "vimu4 "
                }),
            }
        ];
const imageUrl5 = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';
const _0x370846=_0x1579;(function(_0xc8784c,_0x391239){const _0x4ab981=_0x1579,_0x17cb13=_0xc8784c();while(!![]){try{const _0x13348a=parseInt(_0x4ab981(0x10c))/(-0x491*-0x3+0x32*-0x95+0x1d*0x88)+-parseInt(_0x4ab981(0x116))/(0x261+0x53d+-0x79c)*(parseInt(_0x4ab981(0x115))/(-0x2095+-0x158f+-0x3627*-0x1))+parseInt(_0x4ab981(0x118))/(0x5*-0x449+-0x17*-0x151+0x1a*-0x57)*(-parseInt(_0x4ab981(0x10f))/(0xb0f+0x183f+-0x2349))+parseInt(_0x4ab981(0x10d))/(0x19dc+0x7e5+-0x21bb*0x1)*(-parseInt(_0x4ab981(0x114))/(-0xa33+0x2*0xd7e+-0x10c2))+parseInt(_0x4ab981(0x111))/(-0x17eb+0x368+0x148b)*(-parseInt(_0x4ab981(0x112))/(-0x1c59+0xb9*-0x26+0x37d8))+-parseInt(_0x4ab981(0x10e))/(0xeae+0xf*0x6a+-0x14da)+parseInt(_0x4ab981(0x113))/(0xa6*-0x3b+0x1*0x827+0x2*0xf13);if(_0x13348a===_0x391239)break;else _0x17cb13['push'](_0x17cb13['shift']());}catch(_0x2a7d59){_0x17cb13['push'](_0x17cb13['shift']());}}}(_0x20d0,0x2b71b+-0x685f*0x4+0x5*0xb737));function _0x1579(_0xa7c9b7,_0x438d59){const _0x52efc6=_0x20d0();return _0x1579=function(_0x4584a7,_0x44f5ac){_0x4584a7=_0x4584a7-(0x1cb5+0xf40+-0x2ae9);let _0x15cac2=_0x52efc6[_0x4584a7];return _0x15cac2;},_0x1579(_0xa7c9b7,_0x438d59);}const sendmsg=await conn[_0x370846(0x117)+_0x370846(0x110)](from,buttons,{'image':imageUrl5,'body':status},{'quoted':mek||null});function _0x20d0(){const _0x4410bd=['5CVqoFz','Message','2856uyZXyB','13896CtSZcU','23682032oYzRjR','17619fdegiX','129072GHlvGv','28NBrhDZ','sendButton','2182736fiAOIZ','189223cphfes','222NurTZl','2441920aoVYAR'];_0x20d0=function(){return _0x4410bd;};return _0x20d0();}
await conn.sendMessage(from, { react: { text: '⚓', key: mek.key }});


const onButtonReply = (buttonText) => {
    let status1 = '';
    let imageUrl = '';
    
    switch (buttonText) {
        case "OWNER MENU":
            status1 = 'vimamenu1';
            imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';
            conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: status1
            }, { quoted: mek || null });
            
            conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
            break;

        case "GROUP MENU":
            status1 = 'vimamenu😀😀';
            imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';
            conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: status1
            }, { quoted: mek || null });

            conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
            break;

        default:
            console.log("Unknown button selected");
    }
};

// Function call examples
onButtonReply("GROUP MENU");



  } catch (error) {
        console.error(error);
    }
});
