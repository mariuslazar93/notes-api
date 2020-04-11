class DeleteNoteController {
  constructor(notesService, errorService) {
    this.notesService = notesService;
    this.errorService = errorService;
  }

  async execute(req, h) {
    const note = await this.notesService.get(req.params.id);

    if (!note) {
      return h.response().code(204);
    }

    if (note.userId !== req.auth.credentials.payload.sub) {
      throw this.errorService.unauthorized();
    }

    await this.notesService.delete(req.params.id);

    return h.response().code(204);
  }
}

module.exports = DeleteNoteController;
