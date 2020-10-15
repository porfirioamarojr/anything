<template>
  <div id="app">
    <h1>Clientes</h1>
    <input type="text" v-model="clienteAmaro.nome">
    <input type="text" v-model="clienteAmaro.email">
    <Cliente :cliente="clienteAmaro"/>
    <CadastroCliente/>

    <Produto/>
    <Produto/>
    <Produto/>
        
  </div>
</template>

<script>
import Cliente from './components/Cliente'
import Produto from './components/Produto'

export default {
  name: 'App',
  data(){
    return {
      nomeAamaro: "Amaro Júnior",
      clienteAmaro: {
        nome: "Amaro",
        numero: 83999986464,
        email: "algumemail@gmail.com",
        sexo: "M",
        data_nasc: "09/06/1993",
        cpf: 12345678901
      }
    }
  },
  components:{
    Cliente,
    Produto
  }
}
</script>

<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
