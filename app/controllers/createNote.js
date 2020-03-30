const models = require('../models');

module.exports = async (req, h) => {
  const body = {
    title: req.payload.title,
    content: req.payload.content,
  };
  const note = await models.notes.create(body);

  return { note };
};
