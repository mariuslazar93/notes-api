const Sequelize = require('sequelize');

module.exports = (db) => {
  const notes = require('./notes')(db, Sequelize);

  return {
    notes,
  };
};
