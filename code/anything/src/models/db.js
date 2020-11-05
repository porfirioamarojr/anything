const Sequelize = require('sequelize');

const sequelize = new Sequelize('anything', 'postgres', 'admin',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}