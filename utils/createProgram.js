'use strict';

const commander = require('commander');
const chalk = require('chalk');

const files = require('../lib/files');
const msg = require('../lib/chalk');
const packageJson = require('../package.json');

let appName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(chalk.blue('<project-directory> [options]'))
  .action((name) => {
    appName = name;
  })
  .allowUnknownOption()
  .on('--help', () => {
    console.log();
    console.log(`    Only ${chalk.blue('<project-directory>')} is required.`);
    console.log();
    console.log('If you have any problems, do not hesitate to file an issue:');
    console.log(
      `${chalk.blue(
        'https://github.com/marcoantonioghiani01/create-koa-application/issues/new',
      )}`,
    );
    console.log();
  })
  .parse(process.argv);

appName = appName || '';

const checkArgs = async () => {
  if (!appName) {
    console.log();
    msg.error('You must pass a name as argument for your app.');
    console.log();
    msg.message(
      'Please specify the project directory:\n    create-koa-application <project-directory>',
    );
    console.log();
    process.exit(1);
  }

  if (files.directoryExists(appName)) {
    console.log();
    msg.error(
      `The "${appName}" directory already exists on the current path.\n\n     Try with a different name or change folder!`,
    );
    console.log();
    process.exit();
  }
  return null;
};

module.exports = {
  program,
  appName,
  checkArgs,
};
