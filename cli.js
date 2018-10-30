#!/usr/bin/env node
const fs = require('fs');
const meow = require('meow');
const chalk = require('chalk');
const initit = require('./uninitit');

const logo = chalk.hex('#d07922')('[vue-parcel]');
const log = (...args) => {
  console.log(logo, ...args);
};
log.error = (...args) => {
  console.log(chalk.red('[ERROR]'), ...args);
};

const template = 'edm00se/vue-parcel-starter';
const templateDepth = 1;

const cli = meow(
  `
  Usage

    $ npm init vue-parcel my-app-name

    $ npx create-vue-parcel my-app-name

`,
  {
    booleanDefault: undefined,
    flags: {
      help: {
        type: 'boolean',
        alias: 'h'
      },
      version: {
        type: 'boolean',
        alias: 'v'
      }
    }
  }
);

const [name] = cli.input;

if (!name) {
  cli.showHelp(0);
}

if (!fs.existsSync(name)) {
  initit({ name, template, templateDepth })
    .then(res => {
      log('created vue-parcel app');
      process.exit(0);
    })
    .catch(err => {
      log.error('failed to create vue-parcel app');
      log.error(err);
      process.exit(1);
    });
} else {
  log.error(`'${name}' already exists!`);
  log.error('exiting...');
  process.exit(1);
}
