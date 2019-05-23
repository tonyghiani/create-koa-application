'use strict';

const chalk = require('chalk');

exports.welcome = (appName) => {
  console.log();
  console.log(chalk.green('   🚀 Your Koa application is initialized with success!'))
  console.log();
  console.log('This is the list of scripts we created for you:');
  console.log();
  console.log(chalk.blue('   npm start'));
  console.log(chalk.cyan('   Start your Koa application.'));
  console.log();
  console.log(chalk.blue('   npm run dev'));
  console.log(chalk.cyan('   Start your Koa application in development mode.'));
  console.log();
  console.log(chalk.blue('   npm run format'));
  console.log(chalk.cyan('   Format your code following the prettier rules.'));
  console.log();
  console.log(chalk.blue('   npm run lint'));
  console.log(chalk.cyan('   Lint your code to find style errors.'));
  console.log();
  console.log(chalk.blue('   npm run check'));
  console.log(chalk.cyan('   Run format and lint scripts.'));
  console.log();
  console.log(chalk.blue('   npm test'));
  console.log(chalk.cyan('   Run your tests suite.'));
  console.log();
  console.log('Now you can start working on your awesome project:');
  console.log();
  console.log(chalk.blue('   cd'), appName);
  console.log(chalk.blue('   npm start'));
  console.log();
}
