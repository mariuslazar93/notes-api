const Hapi = require('@hapi/hapi');
const config = require('./config');
const routes = require('./app/routes');
const models = require('./app/models');

const init = async () => {
  // Create server
  const server = new Hapi.Server({
    port: config.port,
    routes: { cors: { origin: ['*'] } },
  });

  // Define routes
  server.route(routes);
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

process.on('unhandledException', err => {
  console.log('Exception: ', err);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.log('Exception: ', err);
  process.exit(1);
});

models.sequelize.sync().then(() => {
  init();
});
