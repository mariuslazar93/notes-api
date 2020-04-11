class UpdateNoteController {
  constructor(notesService) {
    this.notesService = notesService;
  }

  async execute(req, h) {
    let note = await this.notesService.get(req.params.id);

    if (!note) {
      throw this.errorService.notFound();
    }

    if (note.userId !== req.auth.credentials.payload.sub) {
      throw this.errorService.unauthorized();
    }

    await this.notesService.update(
      req.params.id,
      req.auth.credentials.payload.sub,
      req.payload
    );

    note = await this.notesService.get(req.params.id);

    return { note };
  }
}

module.exports = UpdateNoteController;
