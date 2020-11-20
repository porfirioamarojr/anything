const db = require('./db')

const Endereco = db.sequelize.define('enderecos',{
    cpf:{
        type: db.Sequelize.STRING
        
    },
    rua:{
        type: db.Sequelize.STRING
    
    },
    cidade:{
        type: db.Sequelize.STRING
        
    },
    cep:{
        type: db.Sequelize.STRING
        
    },
    numero:{
        type: db.Sequelize.INTEGER
        
    },
    bairro:{
        type: db.Sequelize.STRING
        
    },
    referencia:{
        type: db.Sequelize.STRING
        
        
    }
})

//Endereco.sync({force: true})
module.exports = Endereco