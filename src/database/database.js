var Sequelize = require('sequelize');
 
var sequelize = new Sequelize(
    'angular',//bd
    'postgres',//user
    '000324',//pss
    {
        host:'localhost',
        dialect: 'postgres',
        logging: false
    }
)
module.exports = sequelize;