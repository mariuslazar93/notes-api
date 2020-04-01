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
    options: {
      cors: {
        origin: ['localhost:4200', 'ng-notes-app.netlify.app']
      }
    }
  },
  {
    method: 'POST',
    path: '/notes',
    handler: createNoteController,
        options: {
      cors: {
        origin: ['localhost:4200', 'ng-notes-app.netlify.app']
      }
    }
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteController,
        options: {
      cors: {
        origin: ['localhost:4200', 'ng-notes-app.netlify.app']
      }
    }
  },
  {
    method: 'PATCH',
    path: '/notes/{id}',
    handler: updateNoteController,
        options: {
      cors: {
        origin: ['localhost:4200', 'ng-notes-app.netlify.app']
      }
    }
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteController,
        options: {
      cors: {
        origin: ['localhost:4200', 'ng-notes-app.netlify.app']
      }
    }
  },
];
