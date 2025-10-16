const fs = require('fs').promises;

async function readJSON(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeJSON(filepath, data) {
  try {
    await fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    throw err;
  }
}

module.exports = { readJSON, writeJSON };
