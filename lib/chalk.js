const chalk = require('chalk');

exports.message = (message) => {
  console.log(chalk.blue(message));
};

exports.success = (success) => {
  console.log(chalk.green('✔', chalk.bold('Done: '), success));
};

exports.warn = (warn) => {
  console.log(chalk.yellow('⚠', chalk.bold('Warning: '), warn));
};

exports.error = (error) => {
  console.log(chalk.red('❌ ', chalk.bold('Error: '), error));
};
