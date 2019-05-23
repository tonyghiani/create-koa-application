'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const msg = require('../lib/chalk');
const { createSpinner } = require('./createSpinner');

exports.installDependencies = async (appName) => {
  try {
    const packSpinner = createSpinner(`Installing the required dependencies...`);
    packSpinner.start();
  
    process.chdir(appName);
    await exec('npm install');
  
    packSpinner.stop(true);
    msg.success('All the dependencies are installed with success!');
    return true;
  } catch (error) {
    msg.error('Failed while installing the dependencies!');
    process.exit()
  }
};
