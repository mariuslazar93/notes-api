const jwksRsa = require('jwks-rsa');
const config = require('../config');

module.exports = async function keyProvider(decoded) {
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
