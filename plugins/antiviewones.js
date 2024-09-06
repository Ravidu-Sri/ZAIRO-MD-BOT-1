const { smd, bot_ } = require('../lib'); // අවශ්‍ය මොඩියුල ආනයනය කරයි
let bgmm = false; // boolean විචල්‍යයක් ආරම්භ කරයි

// කමන්ඩ් එක නිර්මාණය කරන්න
smd({
    'cmdname': 'antiviewonce', // කමන්ඩ් නාමය
    'alias': ['av'], // කමන්ඩ් එකේ වෙනත් නාම
    'desc': 'ස්වයංක්‍රීයව view once ඩවුන්ලෝඩ් කරන ආකාරය ඔන්/ඕෆ් කරන්න.', // විස්තරය
    'fromMe': true, // කමන්ඩ් එක බොට් එකෙන්ම යවන බව දැක්වෙයි
    'type': 'user', // කමන්ඩ් එකේ වර්ගය
    'use': '<on/off>', // කමන්ඩ් එකේ භාවිතා කරන ආකාරය
    'filename': __filename // කමන්ඩ් එක පවතින ගොනුව
}, async (message, match) => { // Obfuscated ක්‍රමලේඛ නම් වෙනස් කරන ලදී
    // සහය උපකාරක (helpers)
    const helpers = {
        getCommand: function (prefix, body) {
            return body.trim().split(' ')[0].toLowerCase();
        }
    };

    try {
        // භාවිතා කරන්නාගේ ID අනුව bot සංස්කරණය ලබා ගන්න
        bgmm = await bot_.findOne({ 'id': `antiviewonce_${message.user}` }) || 
               await bot_.updateOne({ 'id': `antiviewonce_${message.user}` });

        let command = helpers.getCommand(message.prefix, match.body);
        
        // "on" හෝ "enable" කමන්ඩ් එක හඳුනා ගැනීම
        if (command === 'on' || command === 'enable') {
            if (bgmm.antiviewonce === 'true') {
                return await message.reply('*AntiViewOnce දැනටමත් සක්‍රීය වී ඇත!*');
            }
            await bot_.updateOne({ 'id': `antiviewonce_${message.user}` }, { 'antiviewonce': 'true' });
            return await message.reply('*AntiViewOnce සාර්ථකව සක්‍රීය කර ඇත!*');
        }
        // "off" හෝ "disable" කමන්ඩ් එක හඳුනා ගැනීම
        else if (command === 'off' || command === 'disable') {
            if (bgmm.antiviewonce === 'false') {
                return await message.reply('*AntiViewOnce දැනටමත් අක්‍රීය වී ඇත!*');
            }
            await bot_.updateOne({ 'id': `antiviewonce_${message.user}` }, { 'antiviewonce': 'false' });
            return await message.reply('*AntiViewOnce සාර්ථකව අක්‍රීය කර ඇත!*');
        } else {
            return await message.reply('*වැරදි කමන්ඩ් භාවිතය. <on/off> භාවිතා කරන්න.*');
        }
    } catch (error) {
        await message.error(`දෝෂයක්: ${error.message}\n\nකමන්ඩ්: antiviewonce`, error);
    }
});

// බොට් එකේ "on" සිදුවීම සැකසීම
smd({ 'on': 'message' }, async (message, media) => {
    try {
        if (!bgmm) {
            bgmm = await bot_.findOne({ 'id': `antiviewonce_${message.user}` });
        }
        if (bgmm && bgmm.antiviewonce === 'true') {
            let fileURL = await message.media.downloadAndSaveMediaMessage(message.message);
            await message.sendMessage(message.chat, { url: fileURL }, { caption: message.body });
        }
    } catch (error) {
        console.log('antiviewonce පණිවිඩයක් සැකසීමට යන විට දෝෂයකි:', error);
    }
});