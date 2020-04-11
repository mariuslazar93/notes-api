class GetAllNotesController {
  constructor(notesService) {
    this.notesService = notesService;
  }

  async execute(req, h) {
    const notes = await this.notesService.getAllByUserId(req.auth.credentials.payload.sub);

    return { notes };
  }
}

module.exports = GetAllNotesController;

