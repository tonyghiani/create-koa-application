'use strict';

const chalk = require('chalk');
const { Spinner } = require('cli-spinner');

exports.createSpinner = (message) => {
  const spinner = new Spinner(
    chalk.blue(`  %s ${message}`),
  );
  spinner.setSpinnerString(18);
  return spinner;
};
