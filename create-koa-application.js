'use strict';

const {
  applyPatch,
  appName,
  checkArgs,
  checkConnection,
  cloneTemplate,
  createLogo,
  initGit,
  installDependencies,
  welcome
} = require('./utils');

(async () => {
  createLogo();
  await checkArgs();
  await checkConnection()
  await cloneTemplate(appName);
  await applyPatch(appName);
  await installDependencies(appName);
  await initGit();
  welcome(appName);
})();
