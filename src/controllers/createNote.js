class CreateNoteController {
  constructor(notesService) {
    this.notesService = notesService;
  }

  async execute(req, h) {
    const body = {
      title: req.payload.title,
      content: req.payload.content,
      userId: req.auth.credentials.payload.sub,
    };
    const note = await this.notesService.create(body);

    return { note };
  }
}

module.exports = CreateNoteController;
