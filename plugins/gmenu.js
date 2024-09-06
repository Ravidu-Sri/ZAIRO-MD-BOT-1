const {cmd, commands} = require('../command');

cmd({
    pattern: "setname", // Command name
    react: "✏️", // Reaction shown when command is called
    desc: "Change the WhatsApp group name", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, args, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        const newName = args.join(' ');
        if (!newName) return reply('කරුණාකර නව නමක් ලබා දෙන්න.');

        // Update group name
        await conn.groupUpdateSubject(from, newName);
        reply(`✅ Group name successfully changed to: ${newName}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// Handle View Once Media (Auto View)
cmd({
    pattern: 'vc',
    react: "👁️", // Reaction emoji
    desc: 'Automatically view View Once media and save it',
    category: 'media',
    filename: __filename,
    botAdmin: true
}, async (conn, mek, m, { from, reply, media }) => {
    try {
        if (m.isViewOnce) {
            // Automatically download View Once media
            const mediaFile = await m.media.downloadAndSaveMediaMessage(m.message);
            
            // Send back the downloaded media
            await conn.sendMessage(from, { url: mediaFile }, { caption: '📥 View Once media saved' });
            reply('✅ View Once media has been successfully saved.');
        } else {
            reply('⚠️ This is not a View Once message.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "setabout", // Command name
    react: "ℹ️", // Reaction shown when command is called
    desc: "Change the WhatsApp group description", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, args, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        const newDescription = args.join(' ');
        if (!newDescription) return reply('කරුණාකර නව description එකක් ලබා දෙන්න.');

        // Update group description (About)
        await conn.groupUpdateDescription(from, newDescription);
        reply(`✅ Group description successfully changed to: ${newDescription}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "mute", // Command name for mute
    react: "🔇", // Reaction shown when command is called
    desc: "Mute the WhatsApp group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Mute the group (only admins can send messages)
        await conn.groupSettingUpdate(from, 'announcement');
        reply('🔇 Group has been muted. Only admins can send messages.');
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

cmd({
    pattern: "unmute", // Command name for unmute
    react: "🔊", // Reaction shown when command is called
    desc: "Unmute the WhatsApp group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Unmute the group (everyone can send messages)
        await conn.groupSettingUpdate(from, 'not_announcement');
        reply('🔊 Group has been unmuted. Everyone can send messages.');
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "promote", // Command name for promoting
    react: "⬆️", // Reaction shown when command is called
    desc: "Promote a member to admin", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, args, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        let mentioned = mek.message.extendedTextMessage ? mek.message.extendedTextMessage.contextInfo.mentionedJid : [];
        if (mentioned.length === 0) return reply('කරුණාකර promote කිරීමට සොයා ගන්නා ලද සාමාජිකයන් mention කරන්න.');

        // Promote member(s)
        await conn.groupParticipantsUpdate(from, mentioned, 'promote');
        reply(`✅ Promote කරන ලදි: @${mentioned[0].split('@')[0]}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

cmd({
    pattern: "demote", // Command name for demoting
    react: "⬇️", // Reaction shown when command is called
    desc: "Demote a member from admin", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, args, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        let mentioned = mek.message.extendedTextMessage ? mek.message.extendedTextMessage.contextInfo.mentionedJid : [];
        if (mentioned.length === 0) return reply('කරුණාකර demote කිරීමට සොයා ගන්නා ලද සාමාජිකයන් mention කරන්න.');

        // Demote member(s)
        await conn.groupParticipantsUpdate(from, mentioned, 'demote');
        reply(`✅ Demote කරන ලදි: @${mentioned[0].split('@')[0]}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "tagall", // Command name
    react: "📢", // Reaction shown when command is called
    desc: "Tag all group members", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, groupMetadata, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');

        // Get all group members
        const participants = groupMetadata.participants;
        const members = participants.map(p => p.id);
        const memberNames = participants.map(p => `@${p.id.split('@')[0]}`).join('\n');

        // Create the message to tag all members
        const message = `📢 *Tagging all group members:* \n\n${memberNames}`;

        // Send the message with all members tagged
        await conn.sendMessage(from, {
            text: message,
            mentions: members // Mention all members
        }, { quoted: mek });

        reply('✅ All members have been tagged.');

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "add", // Command name
    react: "➕", // Reaction shown when command is called
    desc: "Add a member to the group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, args, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        const userToAdd = args[0] + '@s.whatsapp.net'; // Get the number from the command argument
        if (!args[0]) return reply('කරුණාකර ඇතුළත් කිරීමට ඕනෑම කෙනෙකුගේ අංකයක් ලබා දෙන්න.');

        // Add the member to the group
        await conn.groupParticipantsUpdate(from, [userToAdd], 'add');
        reply(`✅ Member added successfully: @${args[0]}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "grouplink", // Command name
    react: "🔗", // Reaction shown when command is called
    desc: "Get the group invite link", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Get the group invite code
        const inviteCode = await conn.groupInviteCode(from);
        const groupLink = `https://chat.whatsapp.com/${inviteCode}`; // Create the full group link

        // Send the group link
        reply(`🔗 *Group Link:* ${groupLink}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "kick", // Command name
    react: "👢", // Reaction shown when command is called
    desc: "Remove a member from the group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, args, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        const userToKick = mek.message.extendedTextMessage ? mek.message.extendedTextMessage.contextInfo.mentionedJid : [];
        if (userToKick.length === 0) return reply('කරුණාකර kick කිරීමට අවශ්‍ය සාමාජිකයන් mention කරන්න.');

        // Kick the member(s) from the group
        await conn.groupParticipantsUpdate(from, userToKick, 'remove');
        reply(`✅ Member kicked successfully: @${userToKick[0].split('@')[0]}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "kickall", // Command name
    react: "🧹", // Reaction shown when command is called
    desc: "Remove all members from the group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, groupMetadata, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Get all group members
        const participants = groupMetadata.participants;
        const memberIds = participants.map(p => p.id);

        // Remove all members from the group
        await conn.groupParticipantsUpdate(from, memberIds, 'remove');
        reply('✅ All members have been removed from the group.');
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "clearmsgs", // Command name
    react: "🧹", // Reaction shown when command is called
    desc: "Delete all messages in the group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Get all messages in the group
        const messages = await conn.loadAllMessages(from);
        const messageIds = messages.map(msg => msg.id);

        // Delete all messages
        await conn.deleteMessages(from, messageIds);
        reply('✅ All messages in the group have been deleted.');

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "endgroup", // Command name
    react: "🛑", // Reaction shown when command is called
    desc: "End the group by removing all members and deleting the group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, groupMetadata, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Get all group members
        const participants = groupMetadata.participants;
        const memberIds = participants.map(p => p.id);

        // Remove all members from the group
        await conn.groupParticipantsUpdate(from, memberIds, 'remove');
        
        // Delete the group
        await conn.groupDelete(from);
        
        reply('✅ Group has been ended and deleted.');

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "gjid", // Command name
    react: "🆔", // Reaction shown when command is called
    desc: "Get the group JID", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, groupMetadata, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Get the group JID
        const groupJid = from; // Group JID is the same as the from parameter

        // Send the group JID
        reply(`🆔 *Group JID:* ${groupJid}`);
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

cmd({
    pattern: "viewonce", // Command name
    react: "👁️", // Reaction shown when command is called
    desc: "Send a view once message", // Command description
    category: "media", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, { from, args, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // URL of the media you want to send as a view once message
        const mediaUrl = args[0]; // Media URL as argument

        if (!mediaUrl) return reply('⚠️ කරුණාකර view once message එකට media URL එක ලබා දෙන්න.');

        // Send the media as a view once message
        await conn.sendMessage(from, {
            viewOnce: { url: mediaUrl }, // View once media
            caption: "🔒 *View Once Message:*"
        }, { quoted: mek || null });

        reply('✅ View once message sent successfully.');
        
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});



cmd({
    pattern: "left", // Command name
    react: "🚪", // Reaction shown when command is called
    desc: "Leave the group", // Command description
    category: "group", // Command category
    filename: __filename, // Current file name
    admin: true, // Admin permission required
    botAdmin: true // Bot must be admin
}, async (conn, mek, m, {from, isBotAdmins, isAdmins, sender, reply}) => {
    try {
        if (!isAdmins) return reply('⚠️ ඔබට පරිපාලක අවසරය නැත.');
        if (!isBotAdmins) return reply('⚠️ මම පරිපාලක අයිතියක් නැත.');

        // Leave the group
        await conn.groupParticipantsUpdate(from, [sender], 'remove');
        reply('✅ You have left the group.');

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});