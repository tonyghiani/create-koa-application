const { applyPatch } = require('./applyPatch');
const { program, appName, checkArgs } = require('./createProgram');
const { checkConnection } = require('./checkConnection');
const { cloneTemplate } = require('./cloneTemplate');
const { createLogo } = require('./createLogo');
const { createSpinner } = require('./createSpinner');
const { initGit } = require('./initGit');
const { installDependencies } = require('./installDependencies');
const { welcome } = require('./welcome');

module.exports = {
  applyPatch,
  appName,
  checkArgs,
  checkConnection,
  cloneTemplate,
  createLogo,
  createSpinner,
  initGit,
  installDependencies,
  program,
  welcome
};
