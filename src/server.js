const config = require('./config');
const Hapi = require('@hapi/hapi');

module.exports = async (routes, plugins) => {
  const server = new Hapi.Server({
    port: config.port,
    routes: { cors: { origin: ['*'] } },
  });

  await plugins.attach(server);

  // Set the default auth strategy to JWT
  server.auth.default('jwt_auth');

  // Register all the routes
  server.route(routes);

  return server;
};
