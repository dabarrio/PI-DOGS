const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    min_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.TEXT,
    },
  });
};
