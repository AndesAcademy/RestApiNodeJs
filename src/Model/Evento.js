var sequelize = require('../database/database');
var Sequelize = require('sequelize');

const Evento = sequelize.define('evento', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    evento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    presentacion: Sequelize.STRING
    ,
    codigo: Sequelize.STRING
    ,
    video: Sequelize.STRING
    ,
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: false
    },
    realizado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    timestamps: false
});

module.exports = Evento;