'use strict';

const fs = require('fs');
const path = require('path');

const msg = require('../lib/chalk');
const { createSpinner } = require('./createSpinner');

exports.applyPatch = async appName => {
  const patchSpinner = createSpinner('Updating dependencies list...');
  try {
    patchSpinner.start();
    const appPath = path.join(process.cwd(), appName)
    const packageJsonPath = path.join(appPath, 'package.json');
    const licensePath = path.join(appPath, 'LICENSE');
    const packageJson = require(packageJsonPath);
    packageJson.name = appName
    packageJson.version = '0.1.0'
    packageJson.description = '';
    delete packageJson.author;
    delete packageJson.repository;
    delete packageJson.bugs;
    delete packageJson.homepage;
    delete packageJson.license;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    fs.unlinkSync(licensePath)
    await new Promise(res => setTimeout(res, 1000))
    patchSpinner.stop(true);
    msg.success('Dependencies list updated!');
    return true;
  } catch (error) {
    patchSpinner.stop(true);
    msg.error('Failed while updating the dependencies!');
    process.exit()
  }
};
