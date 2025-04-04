const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "h8QkAQ6I#zZYEXSzZYCNb5tFRCamWXl9gWk24Mh4x1p6Lfa4UihU",
MONGODB: process.env.MONGODB || "mongodb+srv://wixiye7918:CTEgvdnkDcSdJE7j@cluster0.mv8un.mongodb.net/",




BOT_NUMBER: process.env.BOT_NUMBER || "94723423602",

};
