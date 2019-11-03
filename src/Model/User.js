var Sequelize = require('sequelize');
var sequelize = require('../database/database');

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombres: Sequelize.TEXT
    ,
    apellidos: Sequelize.TEXT
    ,
    correo: {
        type: Sequelize.TEXT
    },
    celular: {
        type: Sequelize.TEXT
    },
    empresa: {
        type: Sequelize.TEXT
    },
    genero: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});
module.exports = User;
