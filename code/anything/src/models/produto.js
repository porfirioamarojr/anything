const db = require('./db')

const Produto = db.sequelize.define('produtos',{
    nomeProduto:{
        type: db.Sequelize.STRING
    },
    valorProduto:{
        type: db.Sequelize.DOUBLE
    },
    descricaoProduto:{
        type: db.Sequelize.STRING
    },
    cpfDono:{
        type: db.Sequelize.STRING
    }
})

//Produto.sync({force: true})
module.exports = Produto
