const db = require('./db')

const Loja = db.sequelize.define('lojas',{
    cpf:{
        type: db.Sequelize.STRING
        
    },
    cnpj:{
        type: db.Sequelize.STRING
        
    },
    nomeLoja:{
        type: db.Sequelize.STRING
        
    },
    descricao:{
        type: db.Sequelize.STRING
        
    }
})

//Loja.sync({force: true})
module.exports = Loja