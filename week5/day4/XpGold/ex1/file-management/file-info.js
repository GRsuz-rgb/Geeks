const fs = require('fs');
const path = require('path');

function getFileInfo() {
    const filePath = path.join(__dirname, 'data', 'example.txt');

    const fileExists = fs.existsSync(filePath);
    console.log(`File exists : ${fileExists}`);

    if (fileExists) {
        const fileStats = fs.statSync(filePath);
        console.log(`Size: ${fileStats.size} bytes`);
        console.log(`Creation time: ${fileStats.birthtime}`);
    }
}

module.exports = getFileInfo;
