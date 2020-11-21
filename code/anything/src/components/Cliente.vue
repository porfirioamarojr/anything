<template>
    <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
        <h4>Nome: {{cliente.nome}}</h4>
        <hr>
        <p>Número: {{cliente.numero}}</p>
        <hr>
        <p>Email: {{cliente.email | processarEmail}}</p>
        <hr>
        <p v-if="mostraIdade === true">Idade: {{cliente.data_nasc}}</p>
        <p v-else>O usuário escondeu a idade!</p>
        <button @click="mudarCor($event)">Mudar Cor</button>
        <button @click="emitirEventoDelete">Deletar</button>
        <hr>
        <p>Sexo: {{cliente.sexo}}</p>
        <hr>
        <p>CPF: {{cliente.cpf}}</p>
        <h4>Id especial: {{idEspecial}}</h4>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            isPremium: true
        }
    },
    props: {
        cliente: Object,
        mostraIdade: Boolean
    },
    methods: {
        mudarCor: function(){
            console.log("$event");
            console.log("Chamou Evento");
            this.isPremium = !this.isPremium;
        },
        emitirEventoDelete: function(){
            console.log("Emitindo do Filho")
            this.$emit("meDelete",{idDoCliente: this.cliente.id, curso: "Curso vue JS", emPromocao: true, component: this})
        },
        testar: function(){
            console.log("Testando para valer!");
            alert("Isso é um alert!");
        }
    },
    filters: {
        processarEmail: function(value){
            return value.toUpperCase();
        }
    },
    computed: {
        idEspecial :function(){
            return (this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase();
        }
    }
}
</script>

<style scoped>
    .cliente{
        color:darkmagenta;
        text-align: left;
        background: #dddccc;
        max-width: 600pt;
        height: 230pt;
        padding: 2%;
        margin-top: 2%;
    }
    .cliente-Premium{
        color:black;
        text-align: left;
        background: darkmagenta;
        max-width: 600pt;
        height: 230pt;
        padding: 2%;
        margin-top: 2%;

    }

    #cliente-nome{
        color:brown;
    }
</style>