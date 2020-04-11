const Sequelize = require('sequelize');

module.exports = (config) => {
  const db = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.settings
  );

  return db;
};
