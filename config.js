const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "n2JVAARY#q0dAUVae8FnAEL9m_e_9VJN9yg8skKRNWufd_preu7A",
MONGODB: process.env.MONGODB || "mongodb://mongo:UulqRzbarHKPlTmjsXTUnyCBstadpehV@junction.proxy.rlwy.net:59009",




BOT_NUMBER: process.env.BOT_NUMBER || "94776734012",

};
