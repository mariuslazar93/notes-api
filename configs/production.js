module.exports = {
  auth: {
    secretKeyUri: process.env.AUTH0_SECRET_KEY_URI,
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
  },
  db: {
    settings: {
      dialect: 'sqlite',
      storage: ':memory:',
    },
  },
};
