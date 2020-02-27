const Sequelize = require('sequelize');
const sequelize = require('./db');

// Definimos el modelo para la tabla producto
const Producto = sequelize.define('producto', {
  nombre: Sequelize.STRING,
  ref: Sequelize.INTEGER,
  imagen: Sequelize.STRING,
  precio: Sequelize.DECIMAL(10,2),
  existencias: Sequelize.INTEGER,
  descripcion: Sequelize.STRING
}, {
  // options
});

module.exports = Producto;