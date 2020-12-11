const Sequelize = require('sequelize');

const sequelize = new Sequelize('anything', 'root', '1234',{
    host: 'localhost',
    dialect: 'mariadb'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}