const Fs = require('fs');
const Path = require('path');
const Sequelize = require('sequelize');
const Config = require('../../config');

// Database settings for the current environment
const dbSettings = Config[Config.env].db;
const sequelize = new Sequelize(
  dbSettings.database,
  dbSettings.user,
  dbSettings.password,
  dbSettings
);

const db = {};
// Read all the files in this directory and import them as models
Fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(Path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
