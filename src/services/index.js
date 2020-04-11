module.exports = (models) => {
  const NotesService = require('./notes');
  const Boom = require('@hapi/boom');

  return {
    notes: new NotesService(models),
    error: Boom,
  };
};
