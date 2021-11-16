const { DataTypes } = require('sequelize');

// [ ] País con las siguientes propiedades:
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población

module.exports = (sequelize) => {
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: "Unspecified capital",
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: "Unspecified subregion",
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    latitude: {
      type: DataTypes.INTEGER,
    },
    longitude: {
      type: DataTypes.INTEGER,
    }
  },{
    timestamps: false
  });
};
