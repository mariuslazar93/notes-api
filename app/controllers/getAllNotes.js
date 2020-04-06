const models = require('../models');

module.exports = async (req, h) => {
  const notes = await models.notes.findAll({
    where: {
      userId: req.auth.credentials.payload.sub,
    },
    order: [['createdAt', 'DESC']],
  });

  return { notes };
};
