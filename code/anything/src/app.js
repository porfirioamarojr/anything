

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

app.post('/login-v', function(req,res){
     
    cadastro.findOne({ where: {email: req.body.email }}).then(function(dados){
        if(dados == null){
            console.log("Email não encontrado")
        }else{
            if(dados.senha == req.body.senha){
                
                res.send("<head><link rel='stylesheet' type='text/css' href='.\assets\style.css'/>'<style  rel='stylesheet' type='text/css'> body{ background-color: #F29F05;}div#borda{border: 1px solid black;margin-right: 50px;padding-right: 50px;padding-left: 50px;background-color: aliceblue;}</style></head><body><div id='borda'><h1>Bem vindo: " + dados.nome + "</h1></div></body></html>")         
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

    }).then(function(){
        res.send("Cadastrado")
    }).catch(function(err){
        res.send("Erro")
    })
    //res.send("Nome: " + req.body.nome + "<br> Valor: " + req.body.id);
});

app.listen(8080);
