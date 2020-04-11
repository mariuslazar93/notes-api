module.exports = (controllers) => {
  return [
    {
      method: 'GET',
      path: '/',
      handler: (req, h) => 'api works',
      options: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/notes',
      handler: (req, h) => controllers.createNote.execute(req, h),
    },
    {
      method: 'GET',
      path: '/notes',
      handler: (req, h) => controllers.getAllNotes.execute(req, h),
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: (req, h) => controllers.getNote.execute(req, h),
    },
    {
      method: 'PATCH',
      path: '/notes/{id}',
      handler: (req, h) => controllers.updateNote.execute(req, h),
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: (req, h) => controllers.deleteNote.execute(req, h),
    },
  ];
};
