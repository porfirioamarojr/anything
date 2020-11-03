<template id="template">
        <form>
            <label class="l85">nome</label> 
            <br>
            <input type="text" v-model="nome" required/>
            <br>
            <label class="l85">e-mail</label>
            <br>
            <input type="email" v-model="email" required/>
            <br>
            <label class="l85">CPF</label>
            <br>
            <input type="text" v-model="cpf" required/>
            <br>
            <label class="l85">sexo</label>
            <br>
            <div class="radio">
                <input type="radio" name="genero" value="Masculino" v-model="sexo" required/>
                <label>Masculino</label>
                <input type="radio" name="genero" value="Feminino" v-model="sexo" required/>
                <label>Feminino</label>
                
            </div>
            <br>
            <label class="l55">data de nascimento</label>
            <br>
            <input type="date" v-model="nascimento" required/>
            <br>
            <label class="l84">telefone</label>
            <br>
            <input type="text" v-model="telefone" required/>
            <br>
            <label class="l84">senha</label>
            <br>
            <input type="password" required/>
            <br>
            <label class="l55">confirme sua senha</label>
            <br>
            <input type="password" required/>
            <br>
            <br>
            <input class="submit" type="submit" value="Criar um cadastro"/>
            <h6>fique tranquilo, nosso site é seguro
                <br>
                já tem um cadastro? entrar
            </h6>
            <h1>Nome = {{nascimento}}</h1>
        </form>
        
</template>

<script>

export default {
    props: {
        nome: String,
        email: String,
        cpf: String,
        sexo: String,
        nascimento: Date,
        telefone: Number,
        senha: String
    }
    
}
</script>

<style scoped>

    /*
    @media only screen and (max-device-width: 900px) {
        .menu { width:100%; }
    } 
    */

    h6{
        padding-top: -50px;
    }

    form{
        background-color: #F3F3F3;
        border-radius: 10px;
        border:solid 1px;
        padding: 10px;
        margin-left: 500px;
        margin-right: 630px;
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