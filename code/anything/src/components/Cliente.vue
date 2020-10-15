<template>
    <div id="cliente">
        <h4>Nome: {{cliente.nome}}</h4>
        <hr>
        <p>Número: {{cliente.numero}}</p>
        <hr>
        <p>Email: {{cliente.email}}</p>
        <hr>
        <p v-if="mostraIdade == true">Idade: {{cliente.data_nasc}}</p>
        <hr>
        <p>Sexo: {{cliente.sexo}}</p>
        <hr>
        <p>CPF: {{cliente.cpf}}</p>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
   
        }
    },
    props: {
        cliente: Object,
        mostraIdade: Boolean
    }
}
</script>

<style scoped>
    #cliente{
        color:darkmagenta;
        text-align: left;
        background: #dddccc;
        max-width: 600pt;
        height: 230pt;
        padding: 2%;
        margin-top: 2%;
    }
    #cliente-nome{
        color:brown;
    }
</style>