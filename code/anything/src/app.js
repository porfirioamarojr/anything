const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cadastro = require("./models/cadastro");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/cadastro", function(req, res){
    app.use('/assets', express.static('assets'));
    res.sendFile(__dirname + "/components/cadastro.html");
    
});

app.get("/login", function(req, res){
    app.use('/assets', express.static('assets'));
    res.sendFile(__dirname + "/components/login.html");
    
});

app.post('/cadastro_concluido', function(req, res){
    cadastro.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        sexo: req.body.sexo,
        senha: req.body.senha,
        telefone: req.body.telefone

    }).then(function(){
        res.send("Cadastrado")
    }).catch(function(err){
        res.send("Erro")
    })
    //res.send("Nome: " + req.body.nome + "<br> Valor: " + req.body.id);
});

app.listen(8080);
