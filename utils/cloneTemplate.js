'use strict';

const path = require('path');
const util = require('util');
const download = util.promisify(require('download-git-repo'));

const msg = require('../lib/chalk');
const { createSpinner } = require('./createSpinner');

exports.cloneTemplate = async appName => {
  const destination = path.join(process.cwd(), appName);
  const koaAppSpinner = createSpinner(
    `Create Koa application in ${destination}...`
  );
  try {
    koaAppSpinner.start();
    await download('marcoantonioghiani01/koa-template', destination);
    koaAppSpinner.stop(true);
    msg.success('Koa application created!');
    return true;
  } catch (error) {
    koaAppSpinner.stop(true);
    msg.error('Failed while fetching the template!');
    msg.error('Is possible that you are trying to create the project in a restricted directory');
    process.exit()
  }
};
