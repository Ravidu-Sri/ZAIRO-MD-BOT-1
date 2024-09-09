var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) info.category = 'misc';
    if (!info.filename) info.filename = "Not Provided";
    commands.push(data);
    return data;
}

// Example function to handle auto-delete after 5 seconds
async function autoDeleteMessage(conn, from, msg, time = 5000) {
    setTimeout(async () => {
        try {
            await conn.sendMessage(from, {
                delete: { id: msg.key.id, remoteJid: from, fromMe: true }
            });
        } catch (e) {
            console.error('Error auto-deleting message:', e);
        }
    }, time); // 5000 milliseconds = 5 seconds
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands,
    autoDeleteMessage, // Exporting autoDelete function
};







/*var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
}; */
