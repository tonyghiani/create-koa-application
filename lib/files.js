const fs = require('fs');
const path = require('path');

const getCurrentDirectoryBase = () => path.basename(process.cwd());

const directoryExists = (filePath) => {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
};

module.exports = {
  getCurrentDirectoryBase,
  directoryExists,
};
