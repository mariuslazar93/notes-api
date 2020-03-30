const models = require('../models');

module.exports = async (req, h) => {
  const note = await models.notes.findByPk(req.params.id);
  const result = await models.notes.destroy({
    where: {
      id: req.params.id,
    },
  });

  return { note };
};
