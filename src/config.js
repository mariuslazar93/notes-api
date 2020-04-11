const path = require('path');
const pkg = require('../package.json');

const env = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;
const logLevel = process.env.LOG_LEVEL || 'info';
const configPath = path.join(__dirname, '..', 'configs', env);
const configFromFile = require(configPath);

const configuration = {
  ...configFromFile,
  env,
  port,
  logLevel,
  appname: pkg.name,
};

module.exports = configuration;
