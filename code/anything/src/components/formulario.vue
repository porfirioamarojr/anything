<template>
    <div>
        <form>
            <label>Nome</label> 
            <hr>
            <input type="text" v-model="nome" required/>
            <hr>
            <label> Email</label>
            <hr>
            <input type="email" v-model="email" required/>
            <hr>
            <label>Cpf</label>
            <hr>
            <input type="text" v-model="cpf" required/>
            <hr>
            <label>Sexo</label>
            <hr>
            <div>
                <input type="radio" name="genero" value="Masculino" v-model="sexo" required/>
                <label>Masculino</label>
                <input type="radio" name="genero" value="Feminino" v-model="sexo" required/>
                <label>Feminino</label>
            </div>
            <hr>
            <label>Data de Nascimento</label>
            <hr>
            <input type="date" v-model="nascimento" required/>
            <hr>
            <label>Telefone</label>
            <hr>
            <input type="text" v-model="telefone" required/>
            <hr>
            <label>Senha</label>
            <hr>
            <input type="password" required/>
            <hr>
            <label>Confirme sua senha</label>
            <hr>
            <input type="password" required/>
            <hr>
            
            <input type="submit" value="enviar"/>
        </form>
        <h1>Nome = {{nascimento}}</h1>
    </div>
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
    hr{
        border: solid 0px;
    }
    form{
        background-color: #F3F3F3;
        border-radius: 5px;
        border:solid 1px;
        padding: 10px;
        margin-left: 500px;
        margin-right: 500px;
        font-size: 12px;
    }
    form label{
        padding-right: 85%;
    }

    form div label input{
        margin: default;
        padding: default;
    }
    form input{
        margin-right: 85%;

    }

</style>