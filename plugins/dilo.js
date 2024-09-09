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
        හායි යාලුවා මගේ විස්තර පහල තියේ⬇️
        
        
> *නම*: 𝐕𝐈𝐌𝐀𝐌𝐎𝐃𝐒

> *ගම*: 𝐆𝐀𝐋𝐋𝐄

> *Team*: 𝐒𝐋 𝐋𝐄𝐆𝐄𝐍𝐃𝐙 𝐅𝐀𝐌𝐈𝐋𝐘

ඔබට වන ලද මෙම පනිවිඩ ස්වංක්‍රීව මකා දමයි. ඔබට නැවත මෙම පනිවිඩය ලබා ගැනීමට මුලින් තිතක් තබා vima ලෙස ටයිප් කර නැවත් සෙන්ඩ් කරන්න.💾';



        const imageUrl = 'https://i.ibb.co/6mzcHsN/20240907-102239.jpg';

        // Check if mek is valid before using it
        const quotedMessage = mek ? mek : null;

        // Send the image with the caption
        const msg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: quotedMessage });


        
        // Auto-delete the message after 5 seconds for everyone
        setTimeout(async () => {
            await conn.sendMessage(from, {
                delete: { id: msg.key.id, remoteJid: from, fromMe: false }
            });
        }, 5000); // 5000 milliseconds = 5 seconds

        // Send reply to Vimukthi and Sampath
        const vimukthiMessage = `හායි ඔයාටත් බොට් කෙනෙක් හදාගැනීමට හෝ හෙරෝකු CC ඇඩ් කර ගැනීමට අවක්ශද එහෙනම් පහල ⤵️ ඇවිත් ඇති මැසේජ් එකේ සියලුම විස්තර ඔබට ලබා ගත හැක.✅⤵️`;
        

        
        
        await conn.sendMessage(from, { text: vimukthiMessage }, { quoted: msg });
        
        
        
        
        const sampathMessage = `ඔබට බොට් කෙනෙක් හද ගැනීමට හෝ හෙරෝකු CC ඇඩ් කිරීමට යන මුදල දැන ගැනීමට මෙම මැසේජ් එකට රිප්ලයි කර පහල තිබෙන අදාල අංකය ඇතුලත් කරන්න ⤵️
        
 ⏭️  1  බොට් කෙනෙක් සදා ගැනීමට යන මුදල දැන ගැනීමට නම්බර් 1 රිප්ලයි කරන්න.⤵️
 
 ⏭️  2  හෙරොකු CC අඩ් කිරීමට යන මුදල දැන ගැනීමට නම්බර් 2 රිප්ලයි කරන්න.⤵️ .`;
        
        await conn.sendMessage(from, { text: sampathMessage }, { quoted: msg });
        
        

        // Auto-delete the messages after 5 seconds for everyone
        setTimeout(async () => {
            await conn.sendMessage(from, {
                delete: { id: msg.key.id, fromMe: true }
            });
        }, 5000);
        
        
        await conn.sendMessage(from, { text: vimukthiMessage }, { quoted: msg });
        
conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            const selectedOption = msg.message.extendedTextMessage.text.trim();
            
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`✸බොට් කෙනෙක් සදා ගැනීමට රුපියල් 300ක මුදලක් වැය වේ⤵️✸

ඔබට මුදල් ගෙවිය හැකි ක්‍රම පහලින් දැක්වේ⬇️

> ✸*ඔබට බෑන්ක් ට්‍රන්සර් හරහා මුදල් ගෙවීමට අවක්ශනම් ⤵️*

 *8023114957* = කමශල් බැන්ක් නම්බර් 

 *Susantha Thilangani* = අයිති කරුගේ නම

 *Galle Branch* =  ශාඛාව     
 
> ✸*ඔබට DIALOG EZ CASH හරහා මුදල් ගෙවීමට අවක්ශනම්⤵️*

 *0762983012* = රීශි කෑශ් නම්බර්

> ✸*ඩයලොග් රීලෝඩ් හෝ කාඩ් වලින් ඔබට ගෙවීමට අවක්ශනම්*

 *0776734030* = රිලෝඩ් නම්බර්
 
 මුදල් දමා විනාඩි 10ක් ඇතුලත සදා දෙනු ලැබේ.✅

`);
                        break;
                        
                        case '2':
                        reply(`✸ඔබට හෙරොකු CC ඇඩ් කර  ගැනීමට රුපියල් 600ක මුදලක් වැය වේ⤵️✸

ඔබට මුදල් ගෙවිය හැකි ක්‍රම පහලින් දැක්වේ⬇️

> ✸*ඔබට බෑන්ක් ට්‍රන්සර් හරහා මුදල් ගෙවීමට අවක්ශනම් ⤵️*

 *8023114957* = කමශල් බැන්ක් නම්බර් 

 *Susantha Thilangani* = අයිති කරුගේ නම

 *Galle Branch* =  ශාඛාව     
 
> ✸*ඔබට DIALOG EZ CASH හරහා මුදල් ගෙවීමට අවක්ශනම්⤵️*

 *0762983012* = රීශි කෑශ් නම්බර්

> ✸*ඩයලොග් රීලෝඩ් හෝ කාඩ් වලින් ඔබට ගෙවීමට අවක්ශනම්*

 *0776734030* = රිලෝඩ් නම්බර්
 
 මුදල් දමා විනාඩි 20ක් ඇතුලත සදා දෙනු ලැබේ.✅

`);
                        break;
        
                    default:
                        reply("Invalid option. Please select a valid menu option (1-4).");
                }
            }
        });
        

    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
});

    } catch (e) {
        console.error('Error sending message:', e);
        reply(`An error occurred: ${e.message}`);
    }
});