class NotesService {
  constructor(models) {
    this.models = models;
  }

  create(body) {
    return this.models.notes.create(body);
  }

  get(id) {
    return this.models.notes.findByPk(id);
  }

  getAllByUserId(userId, order = 'DESC') {
    return this.models.notes.findAll({
      where: { userId },
      order: [['createdAt', order]],
    });
  }

  update(noteId, userId, body) {
    return this.models.notes.update(body, {
      where: {
        id: noteId,
        userId,
      },
    });
  }

  delete(id) {
    return this.models.notes.destroy({
      where: { id },
    });
  }
}

module.exports = NotesService;
