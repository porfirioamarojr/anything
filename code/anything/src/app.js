const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cadastro = require("./models/cadastro");
const endereco = require("./models/endereco");
const loja = require("./models/loja");
const produto = require("./models/produto");
const handlebars = require("express-handlebars");

var user1;

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/home", function(req, res){
    app.use('/assets', express.static('assets'));
    res.sendFile(__dirname + "/components/home.html");
    
});

app.get("/cadastro", function(req, res){
    app.use('/assets', express.static('assets'));
    res.sendFile(__dirname + "/components/cadastro.html");
    
});

app.post("/produtos-loja",function(req,res){
    produto.findAll({where: {cpfDono: req.body.cpfDono}}).then(function(produtos){
            res.render("exibe_produtos",{
                produtos:produtos,
                nomeProduto:produtos.nome,
                valorProduto: produtos.valor,
                descricaoProduto: produtos.descricao,
                customstyle: '<link rel="stylesheet" href="./assets/home.css">'
            })
    })
})

app.get("/login", function(req, res){
    app.use('/assets', express.static('assets'));
    res.sendFile(__dirname + "/components/login.html");
    
});


app.get("/comercio",function(req,res){
    loja.findOne({ where: {cpf: user1 }}).then(function(dados){
        if (dados == null){
            res.render('cadastro_loja',{
                cpf: user1,
                customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
            })
        }else{
            produto.findAll({where: {cpfDono: user1}}).then(function(produtos){
                
                if(produtos == null){
                    res.render("comercio",{
                        nomeLoja:dados.nomeLoja,
                        descricao:dados.descricao,
                        cnpj:dados.cnpj,
                        cpf:dados.cpf,
                        customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
                    })
                }else{
                    res.render("comercio",{
                        nomeLoja:dados.nomeLoja,
                        descricao:dados.descricao,
                        cnpj:dados.cnpj,
                        cpf:dados.cpf,
                        produtos:produtos,
                        nomeProduto:produtos.nome,
                        valorProduto: produtos.valor,
                        descricaoProduto: produtos.descricao,
                        customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
                    })
                }
            })
        }
    })
})

app.post("/set-loja",function(req,res){

    loja.findOne({ where: {cpf: user1 }}).then(function(dados){
        dados.cnpj = req.body.cnpj;
        dados.nomeLoja = req.body.nomeLoja;
        dados.descricao = req.body.descricao;
        dados.save();
    })

    cadastro.findOne({ where: {cpf: user1 }}).then(function(dados){
        res.render('meus_dados', {
            email:dados.email,
            nome:dados.nome,
            sexo:dados.sexo,
            cpf:dados.cpf,
            telefone:dados.telefone,
            data:dados.data,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        });
    });
})

app.post("/comercio-p",function(req,res){
    produto.create({
        cpfDono: req.body.cpfDono,
        valorProduto: req.body.valor,
        nomeProduto: req.body.nome,
        descricaoProduto: req.body.descricaoProduto
    })

    cadastro.findOne({ where: {cpf: user1 }}).then(function(dados){
        res.render('meus_dados', {
          email:dados.email,
          nome:dados.nome,
          sexo:dados.sexo,
         cpf:dados.cpf,
         telefone:dados.telefone,
           data:dados.data,
           customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
         });
    });                                                
});

app.post("/comercio-v",function(req,res){
        loja.create({
            cpf: req.body.cpf,
            cnpj: req.body.cnpj,
            nomeLoja: req.body.nomeLoja,
            descricao: req.body.descricao,
        })

    cadastro.findOne({ where: {cpf: user1 }}).then(function(dados){
        res.render('meus_dados', {
            email:dados.email,
            nome:dados.nome,
            sexo:dados.sexo,
            cpf:dados.cpf,
            telefone:dados.telefone,
            data:dados.data,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        });
    });

})


app.post('/meus_dados', function(req, res){
    cadastro.findOne({ where: {cpf: req.body.cpfVerifica }}).then(function(dados){
        
        dados.nome = req.body.nome;
        dados.email = req.body.email;
        dados.telefone = req.body.telefone;
        dados.cpf = req.body.cpf;
        dados.sexo = req.body.sexo;
        user1 = req.body.cpf;
        dados.save();

        res.render('meus_dados', {
            email:dados.email,
            nome:dados.nome,
            sexo:dados.sexo,
            cpf:dados.cpf,
            telefone:dados.telefone,
            data:dados.data,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        });
    });
});

app.get('/meus_dados', function(req, res){
    cadastro.findOne({ where: {cpf: user1 }}).then(function(dados){
        console.log(user1)
        res.render('meus_dados', {
            email:dados.email,
            nome:dados.nome,
            sexo:dados.sexo,
            cpf:dados.cpf,
            telefone:dados.telefone,
            data:dados.data,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        });
    });
});


app.post('/meu_endereco', function(req,res){
    endereco.findOne({ where: {cpf: req.body.cpfVerifica }}).then(function(dados){

        dados.rua = req.body.rua;
        dados.cidade = req.body.cidade;
        dados.cep = req.body.cep;
        dados.numero = req.body.numero;
        dados.bairro = req.body.bairro;
        dados.cpf = req.body.cpfVerifica;
        dados.referencia = req.body.referencia;
        dados.save();
        user1 = req.body.cpfVerifica;

        res.render('meu_endereco',{
            rua: dados.rua,
            cidade: dados.cidade,
            cep: dados.cep,
            numero: dados.numero,
            bairro: dados.bairro,
            referencia: dados.referencia,
            cpf: dados.cpf,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        })
    })
})

app.get('/meu_endereco', function(req,res){
    endereco.findOne({ where: {cpf: user1 }}).then(function(dados){
        res.render('meu_endereco',{
            rua: dados.rua,
            cidade: dados.cidade,
            cep: dados.cep,
            numero: dados.numero,
            bairro: dados.bairro,
            referencia: dados.referencia,
            cpf: dados.cpf,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        })
    })
})

app.post('/login-v', function(req,res){
     
    cadastro.findOne({ where: {email: req.body.email }}).then(function(dados){
        if(dados == null){
            console.log("Email não encontrado")
        }else{
            if(dados.senha == req.body.senha){ 
                user1 = dados.cpf;
                res.render('conta',{
                    email:dados.email,
                    nome:dados.nome,
                    sexo:dados.sexo,
                    cpf:dados.cpf,
                    telefone:dados.telefone,
                    data:dados.data,
                    customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
                });
                
                //res.send("<head><link rel='stylesheet' type='text/css' href='.\assets\style.css'/>'<style  rel='stylesheet' type='text/css'> body{ background-color: #F29F05;}div#borda{border: 1px solid black;margin-right: 50px;padding-right: 50px;padding-left: 50px;background-color: aliceblue;}</style></head><body><div id='borda'><h1>Bem vindo: " + dados.nome + "</h1></div></body></html>")         
            }else{
                res.send('<script type="text/javascript"> alert("Email ou senha inválidos"); </script>');
                res.send(" <link rel='stylesheet' type='text/css' href='./assets/style.css'/>")
                res.send("<body></body>")
            }
            
        }
    });

});

app.post('/cadastro_concluido', function(req, res){
    cadastro.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        sexo: req.body.sexo,
        senha: req.body.senha,
        telefone: req.body.telefone

    })

    endereco.create({
        cpf: req.body.cpf,
        rua: '-',
        cidade: '-',
        cep: '-',
        numero: 0,
        bairro: '-',
        referencia: '-'
    })

    app.use('/assets', express.static('assets'));
    res.sendFile(__dirname + "/components/login.html");
    //res.send("Nome: " + req.body.nome + "<br> Valor: " + req.body.id);
});

app.get('/del-usuario',function(req,res){
    console.log(user1);
    cadastro.destroy({
        where: {'cpf': user1}
    })
      
    endereco.destroy({where:{'cpf': user1}})

    app.use('/assets', express.static('assets'));
    res.sendFile(__dirname + "/components/login.html");
})

app.get('/del-loja',function(req,res){
    console.log(user1)
    loja.destroy({
        where: {'cpf': user1}
    })

    cadastro.findOne({ where: {cpf: user1 }}).then(function(dados){
        res.render('meus_dados', {
            email:dados.email,
            nome:dados.nome,
            sexo:dados.sexo,
            cpf:dados.cpf,
            telefone:dados.telefone,
            data:dados.data,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        });
    });
})

app.post('/del-produto',function(req,res){
    console.log(user1)
    produto.destroy({
        where: {'id': req.body.id}
    })

    cadastro.findOne({ where: {cpf: user1 }}).then(function(dados){
        res.render('meus_dados', {
            email:dados.email,
            nome:dados.nome,
            sexo:dados.sexo,
            cpf:dados.cpf,
            telefone:dados.telefone,
            data:dados.data,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        });
    });
})

app.post("/edit-produto",function(req,res){

    produto.findOne({ where: {id: req.body.id }}).then(function(dados){
        dados.nomeProduto = req.body.nomeProduto;
        dados.valorProduto = req.body.valorProduto;
        dados.descricaoProduto = req.body.descricaoProduto;
        dados.save();
    })

    cadastro.findOne({ where: {cpf: user1 }}).then(function(dados){
        res.render('meus_dados', {
            email:dados.email,
            nome:dados.nome,
            sexo:dados.sexo,
            cpf:dados.cpf,
            telefone:dados.telefone,
            data:dados.data,
            customstyle: '<link rel="stylesheet" href="./assets/stylePerfil.css">'
        });
    });
})

const server = app.listen(8080);
//exporta o server para que seja possivel acessá-lo em outras partes do programa
module.exports = server;
