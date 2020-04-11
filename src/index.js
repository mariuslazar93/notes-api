const config = require('./config');
const logger = require('./logger')(config);
const db = require('./database')(config);
const models = require('./models')(db);
const services = require('./services')(models);
const controllers = require('./controllers')(services);
const routes = require('./routes')(controllers);
const plugins = require('./plugins')(logger);
const server = require('./server')(routes, plugins);

module.exports = async () => {
  await db.sync();
  return server;
};
