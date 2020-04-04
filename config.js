require('dotenv').config({ silent: true });

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV  || 'development',
    auth: {
      secretKeyUri: process.env.AUTH0_SECRET_KEY_URI,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
    },
    development: {
        db: {
            dialect: 'sqlite',
            storage: ':memory:',
        },
    },
    production: {
        db: {
            dialect: 'sqlite',
            storage: ':memory:',
        }
    },
}
