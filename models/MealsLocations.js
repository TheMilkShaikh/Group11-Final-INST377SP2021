export default (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre_Locations",
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Genre;
};
