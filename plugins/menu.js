const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require('os');

const commandConfig = {
  pattern: 'menu2',
  react: '📒',
  alias: ['help'],
  desc: "Get bot's command list.",
  category: 'main',
  use: '.menu',
  filename: __filename
};

cmd(commandConfig, async (
  conn,
  message,
  from,
  {
    from: chatId,
    l: language,
    quoted: quotedMessage,
    body: messageBody,
    isCmd: isCommand,
    command: cmdName,
    args: arguments,
    q: query,
    isGroup: isGroupChat,
    sender: senderId,
    senderNumber: senderPhoneNumber,
    botNumber2: botNumberSecondary,
    botNumber: botNumberPrimary,
    pushname: senderName,
    isSachintha: isSachinthaUser,
    isSavi: isSaviUser,
    isSadas: isSadasUser,
    isMani: isManiUser,
    isMe: isMeUser,
    isOwner: isOwnerUser,
    groupMetadata: groupMeta,
    groupName: groupName,
    participants: groupParticipants,
    groupAdmins: groupAdmins,
    isBotAdmins: isBotAdmin,
    isAdmins: isAdmin,
    reply: replyToMessage
  }
) => {
  try {
    let downloadCommands = '';
    let searchCommands = '';
    let convertCommands = '';
    let logoCommands = '';
    let mainCommands = '';
    let groupCommands = '';
    let bugCommands = '';
    let otherCommands = '';

    // Categorize commands
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      if (command.category === 'download' && !command.dontAddCommandList) {
        downloadCommands += `*┃▶* .${command.pattern}\n`;
      }
      if (command.category === 'search' && !command.dontAddCommandList) {
        searchCommands += `*┃⩥* .${command.pattern}\n`;
      }
      if (command.category === 'convert' && !command.dontAddCommandList) {
        convertCommands += `*┃▶* .${command.pattern}\n`;
      }
      if (command.category === 'logo' && !command.dontAddCommandList) {
        logoCommands += `*┃▶* .${command.pattern}\n`;
      }
      if (command.category === 'main' && !command.dontAddCommandList) {
        mainCommands += `*┃▶* .${command.pattern}\n`;
      }
      if (command.category === 'group' && !command.dontAddCommandList) {
        groupCommands += `*┃⩥* .${command.pattern}\n`;
      }
      if (command.category === 'bug' && !command.dontAddCommandList) {
        bugCommands += `*┃⩥* .${command.pattern}\n`;
      }
      if (command.category === 'other' && !command.dontAddCommandList) {
        otherCommands += `*┃⩥* .${command.pattern}\n`;
      }
    }

    // Generate the command list message
    const statusMessage = `
*Hello👨‍💻* ${senderName}

*\u256D\u2500 Commands Panel*
*\u2502🕵️‍♂️ Uptime* ${runtime(process.uptime())}
*\u2502🕵️‍♂️ Memory* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem() / 1024 / 1024)}MB
*\u2570\u2500 Command Lists*
*\u2502🕵️‍♂️ DOWNLOAD COMMANDS*
${downloadCommands}
*\u2502🕵️‍♂️ SEARCH COMMANDS*
${searchCommands}
*\u2502🕵️‍♂️ CONVERT COMMANDS*
${convertCommands}
*\u2502🕵️‍♂️ LOGO COMMANDS*
${logoCommands}
*\u2502🕵️‍♂️ MAIN COMMANDS*
${mainCommands}
*\u2502🕵️‍♂️ GROUP COMMANDS*
${groupCommands}
*\u2502🕵️‍♂️ BUG COMMANDS*
${bugCommands}
*\u2502🕵️‍♂️ OTHER COMMANDS*
${otherCommands}
*🤖 VAJIRA MD by Technical Cybers*`;

    const logoImage = { url: config.LOGO };
    const messageOptions = {
      image: logoImage,
      caption: statusMessage
    };

    // Send the message
    await conn.sendMessage(chatId, messageOptions, {
      quoted: quotedMessage,
      messageId: genMsgId(),
    });
  } catch (error) {
    replyToMessage('*Error !!*');
    console.error(error);
  }
});
