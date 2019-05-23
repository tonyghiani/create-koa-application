'use strict';

const chalk = require('chalk');
const figlet = require('figlet');

exports.createLogo = () => {
  console.log('\x1B[2J\x1B[0f');
  console.log(
    chalk.blue(figlet.textSync('Koa App', { horizontalLayout: 'fitted' })),
  );
  console.log();
};
