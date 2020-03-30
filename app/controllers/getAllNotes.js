const models = require('../models');

module.exports = async (req, h) => {
  const notes = await models.notes.findAll({
    order: [['createdAt', 'DESC']],
  });

  return { notes };
};
