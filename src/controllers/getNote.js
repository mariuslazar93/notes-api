class GetNoteController {
  constructor(notesService, errorService) {
    this.notesService = notesService;
    this.errorService = errorService;
  }

  async execute(req, h) {
    const note = await this.notesService.get(req.params.id);

    if (!note) {
      throw this.errorService.notFound();
    }

    if (note.userId !== req.auth.credentials.payload.sub) {
      throw this.errorService.unauthorized();
    }

    return { note };
  }
}

module.exports = GetNoteController;
