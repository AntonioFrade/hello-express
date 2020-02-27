// Importamos el Sequelize
const Sequelize = require('sequelize');


// Conexión a la Base de Datos
const sequelize = new Sequelize('hello_express', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;