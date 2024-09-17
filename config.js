const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "G2QnxCgK#T5_HoMK5BFw5AMPam402CgzeCHxhkh73x2XvFDuW31U",
MONGODB: process.env.MONGODB || "mongodb://mongo:UulqRzbarHKPlTmjsXTUnyCBstadpehV@junction.proxy.rlwy.net:59009",




BOT_NUMBER: process.env.BOT_NUMBER || "94776734012",

};
