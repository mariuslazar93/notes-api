module.exports = (services) => {
  const CreateNoteController = require('./createNote');
  const GetNoteController = require('./getNote');
  const GetAllNotesController = require('./getAllNotes');
  const UpdateNoteController = require('./updateNote');
  const DeleteNoteController = require('./deleteNote');

  return {
    createNote: new CreateNoteController(services.notes),
    getNote: new GetNoteController(services.notes, services.error),
    getAllNotes: new GetAllNotesController(services.notes),
    updateNote: new UpdateNoteController(services.notes),
    deleteNote: new DeleteNoteController(services.notes, services.error),
  };
};
