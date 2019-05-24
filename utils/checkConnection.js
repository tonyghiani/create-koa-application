'use strict';

const util = require('util');
const lookup = util.promisify(require('dns').lookup);

const msg = require('../lib/chalk');
const { createSpinner } = require('./createSpinner');

exports.checkConnection = async () => {
  const connSpinner = createSpinner('Checking connection status...');
  try {
    connSpinner.start();
    await lookup('registry.npmjs.com')
    connSpinner.stop(true);
    msg.success('Connection check success!');
    return true;
  } catch (error) {
    connSpinner.stop(true);
    msg.error('Mmm it seems you are not connected to any network, check your active connection or reset it.');
    process.exit()
  }
}
