const config = require('./config');
const Hapi = require('@hapi/hapi');
const HapiAuthJwt = require('hapi-auth-jwt2');
const jwksRsaKeyProvider = require('./utils/jwksRsa-promisified');
const routes = require('./app/routes');
const models = require('./app/models');

const init = async () => {
  // Create server
  const server = new Hapi.Server({
    port: config.port,
    host: 'localhost',
    routes: { cors: { origin: ['*'] } },
  });

  // Register the auth scheme
  await server.register(HapiAuthJwt);

  // Register the auth strategy
  server.auth.strategy('auth0_jwt', 'jwt', {
    complete: true,
    key: jwksRsaKeyProvider,
    verifyOptions: {
      audience: config.auth.audience,
      issuer: config.auth.issuer,
      algorithms: ['RS256'],
    },
    validate: async function (decoded) {
      console.log('Decoded', decoded);
      if (
        !decoded ||
        !decoded.sub ||
        decoded.iss !== config.auth.issuer ||
        decoded.aud !== config.auth.audience
        ) {
        return { isValid: false };
      }

      return { isValid: true };
    },
  });

  // Set the default auth strategy to JWT
  server.auth.default('auth0_jwt');

  // Register all the routes
  server.route(routes);

  // Start the server
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

process.on('unhandledException', (err) => {
  console.log('Exception: ', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log('Rejection: ', err);
  process.exit(1);
});

models.sequelize.sync().then(() => {
  init();
});
