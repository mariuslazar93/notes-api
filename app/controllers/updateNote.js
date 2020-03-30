const models = require('../models');

module.exports = async (req, h) => {
  const result = await models.notes.update(req.payload, {
    where: {
      id: req.params.id,
    },
  });

  const note = await models.notes.findByPk(req.params.id);

  return { note };
};
