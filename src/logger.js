const bunyan = require('bunyan');

module.exports = (config) => {
  return bunyan.createLogger({
    name: config.appname,
    level: config.logLevel,
  });
};
