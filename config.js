require('dotenv').config({ silent: true });

module.exports = {
    port: process.env.port || 3000,
    env: process.env.NODE_ENV  || 'development',
    development: {
        db: {
            dialect: 'sqlite',
            storage: ':memory:',
        }
    },
    production: {
        db: {
            dialect: 'sqlite',
            storage: ':memory:',
        }
    },
}
