module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('notes', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  });

  return note;
};
