var sequelize = require('../database/database');
var Sequelize = require('sequelize');

var EventoUser = sequelize.define('eventos_users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_user: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    id_evento: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    fecha_registro: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = EventoUser;