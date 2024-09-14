const fs = require('fs');
const { cmd } = require('../command'); // Importing cmd from command.js

// Save status command handler
const saveStatus = async (m, reply) => {
  try {
    const status = m.body.split(' ').slice(1).join(' '); // Get the status message after the command
    if (!status) {
      return reply('Please provide a status to save. Usage: .save <status>');
    }

    // Save the status in a file (status.txt)
    fs.writeFileSync('status.txt', status, 'utf8');
    reply(`Status saved successfully!`);
  } catch (error) {
    console.error('Error:', error);
    reply(`Error saving status: ${error.message}`);
  }
};

// Register .save command
cmd({
  pattern: 'save', // Command trigger
  desc: 'Save a status message',
  category: 'owner',
  filename: __filename
},
async (conn, mek, m, { reply }) => {
  await saveStatus(m, reply);
});