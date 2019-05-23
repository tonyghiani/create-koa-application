'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const msg = require('../lib/chalk');
const { createSpinner } = require('./createSpinner');

exports.initGit = async () => {
  try {
    const gitSpinner = createSpinner('Initializing git repository...');
    gitSpinner.start();
    if (await _checkRepoExist()) return false;
    await exec('git init');
    await exec('git add -A');
    await exec('git commit -nm "Initial commit"');
    gitSpinner.stop(true);
    msg.success('Created git repository!');
    return true;
  } catch (error) {
    msg.error('Something went wrong while creting the repository, be sure to have git installed!');
    process.exit()
  }
}
async function _checkRepoExist () {
  try {
    await exec('git rev-parse --is-inside-work-tree')
    return true;
  } catch (error) {
    return false;   
  }
}