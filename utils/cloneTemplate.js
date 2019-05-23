'use strict';

const path = require('path');
const util = require('util');
const download = util.promisify(require('download-git-repo'));

const msg = require('../lib/chalk');
const { createSpinner } = require('./createSpinner');

exports.cloneTemplate = async appName => {
  try {
    const destination = path.join(process.cwd(), appName);
    const koaAppSpinner = createSpinner(
      `Create Koa application in ${destination}...`
    );
    koaAppSpinner.start();
    await download('marcoantonioghiani01/koa-template', destination);
    koaAppSpinner.stop(true);
    msg.success('Koa application created!');
    return true;
  } catch (error) {
    msg.error('Failed while fetching the template!');
    process.exit()
  }
};
