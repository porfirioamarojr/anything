const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cadastro = require("./models/cadastro");
const handlebars = require("express-handlebars");

var user1;

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

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

app.post('/meus_dados', function(req, res){
    cadastro.findOne({ where: {email: req.body.emailVerifica }}).then(function(dados){
        
        dados.nome = req.body.nome;
        dados.email = req.body.email;
        dados.telefone = req.body.telefone;
        dados.cpf = req.body.cpf;
        dados.sexo = req.body.sexo;
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

app.post('/login-v', function(req,res){
     
    cadastro.findOne({ where: {email: req.body.email }}).then(function(dados){
        if(dados == null){
            console.log("Email não encontrado")
        }else{
            if(dados.senha == req.body.senha){ 
                user1 = dados.email;
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

    }).then(function(){
        res.send("Cadastrado")
    }).catch(function(err){
        res.send("Erro")
    })
    //res.send("Nome: " + req.body.nome + "<br> Valor: " + req.body.id);
});

app.get('/del-usuario',function(req,res){
    cadastro.destroy({
        where: {'email': user}
    }).then(function(){
        res.send("Usuario apagado");
    }).catch(function(erro){
        res.send("Usuario não apagado");
    })
})

app.listen(8080);
