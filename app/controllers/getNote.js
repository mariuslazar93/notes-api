const models = require('../models');
const Boom = require('@hapi/boom');

module.exports = async (req, h) => {
  const note = await models.notes.findByPk(req.params.id);

  if (note.userId !== req.auth.credentials.payload.sub) {
    throw Boom.unauthorized();
  }

  return { note };
};
