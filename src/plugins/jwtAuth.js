const config = require('../config');
const jwtAuthScheme = require('hapi-auth-jwt2');
const jwksRsa = require('jwks-rsa');

module.exports = async (server) => {
  // Register the auth scheme
  await server.register(jwtAuthScheme);

  // Register the auth strategy
  server.auth.strategy('jwt_auth', 'jwt', {
    complete: true,
    key: jwksRsaKeyProvider,
    verifyOptions: {
      audience: config.auth.audience,
      issuer: config.auth.issuer,
      algorithms: ['RS256'],
    },
    validate: async function (decoded) {
      if (!decoded || !decoded.sub || decoded.iss !== config.auth.issuer) {
        return { isValid: false };
      }

      return { isValid: true };
    },
  });
}

async function jwksRsaKeyProvider(decoded) {
  return new Promise((resolve, reject) => {
    const cb = (err, key) => {
      if (!key) {
        reject(err);
      } else {
        resolve({
          key,
        });
      }
    };

    const secretProvider = jwksRsa.hapiJwt2Key({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: config.auth.secretKeyUri,
    });

    secretProvider(decoded, cb);
  });
}
