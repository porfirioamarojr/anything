const db = require('./db')

const Cadastro = db.sequelize.define('conta',{
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    cpf:{
        type: db.Sequelize.STRING
    },
    sexo:{
        type: db.Sequelize.STRING
    },
    data:{
        type: db.Sequelize.DATE
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    senha:{
        type: db.Sequelize.STRING
    }
})

//Cadastro.sync({force: true})
module.exports = Cadastro
