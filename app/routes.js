const getAllNotesController = require('./controllers/getAllNotes');
const createNoteController = require('./controllers/createNote');
const getNoteController = require('./controllers/getNote');
const updateNoteController = require('./controllers/updateNote');
const deleteNoteController = require('./controllers/deleteNote');

module.exports = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesController,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: createNoteController,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteController,
  },
  {
    method: 'PATCH',
    path: '/notes/{id}',
    handler: updateNoteController,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteController,
  },
];
