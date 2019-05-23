#!/usr/bin/env node

'use strict';

var chalk = require('chalk');

var nodeVersion = process.versions.node;
var majorNodeVersion = nodeVersion.split('.')[0];

if (majorNodeVersion < 8) {
  console.error(
    chalk.red(
      'You are running Node ' +
        nodeVersion +
        '.\n' +
        'Create Koa Application requires Node 8 or higher. \n' +
        'Please update your version of Node.'
    )
  );
  process.exit(1);
}

require('./create-koa-application');
