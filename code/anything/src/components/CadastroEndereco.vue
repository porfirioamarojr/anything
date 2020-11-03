<template>
<div>
    <head>
    <title>Title of the document</title>
    <link href="style.css" rel="stylesheet">


    </head>

    <body>
        <img id="logo" src="../assets/LOGO.png"/>

        <div id="form_borda">
            <div id="form_icons">
                <img id="icon" src="../assets/do_utilizador.png"/>
                <label id="cadastro">Cadastre-se</label>
            </div>
            
            <form>
                <label class="l85">Rua</label> 
                <br>
                <input type="text" v-model="rua" required/>
                <br>
                <label class="l85">Cidade</label>
                <br>
                <input type="text" v-model="cidade" required/>
                <br>
                <label class="l85">Cep</label>
                <br>
                <input type="text" v-model="cep" required/>
                <br>
                <label class="l85">Numero</label>
                <br>
                <input type="number" v-model="numero" required/>
                <br>
                <label class="l55">Bairro</label>
                <br>
                <input type="text" v-model="bairro" required/>
                <br>
                <label class="l84">Referência</label>
                <br>
                <input type="text" v-model="referencia" required/>
                <br>
                <br>
                <input class="submit" type="submit" value="Criar um cadastro" onclick="alerta()"/>
            </form>
        </div>
        
    </body>

</div>
</template>
<script>
export default {
    alerta(){
        alert("Cadastro realizado com sucesso");
    }

}
</script>

<style scoped>
    a{
    color:#F29F05;
}

img#logo{
    position: absolute;
    width:650px;
    height:500px;
    top: 15%;
    left: 5%;
}

body{
    background-color: #F29F05;
}
h6{
    font-size: 9px;
}

img#icon{
    height: 40px;
    width: 40px;
}

div#form_icons div#form_borda{
    position: fixed;
}

div#form_icons label#cadastro{
    position: absolute;
    font-size: 15px;
    top: 20px;
    left: 60px;
}

div#form_borda{
    position: absolute;
    top: 7%;
    margin-left: 70%;
    background-color: white;
    padding: 15px;
    padding-top: 10px;
    border-radius: 10px;
}

form{
    background-color: #F3F3F3;
    border-radius: 10px;
    border:solid 1px;
    padding: 30px;
    
    font-size: 12px;
}



form label.l85{
    padding-right: 70%;
}

form label.l84{
    padding-right: 65%;
}

form label.l55{
    padding-right: 35%;
}

.submit{
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 30px;
    padding-right: 40px;
    color:white;
    background-color: #F29F05;
    border: solid 0px;
}
</style>