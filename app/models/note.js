module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('notes', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.STRING,
      field: 'user_id',
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  });

  return note;
};
