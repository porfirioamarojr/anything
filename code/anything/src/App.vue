<template id="template">
  <div id="app">
    <Cadastro/>
    <br>
    <CadastroEndereco/>
    <br>
    <br>
    
  </div>
</template>

<script>

/*
import Formulario from "./components/Formulario"
import Cliente from './components/Cliente'
import Produto from './components/Produto'
*/
import Cadastro from './components/Cadastro'
import CadastroEndereco from './components/CadastroEndereco'

/*export default {
  name: 'App',
  components: {
    formulario
*/
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
    //Cliente,
    //Produto,
    //Formulario,
    Cadastro,
    CadastroEndereco


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
    background-color: #F29F05;
   
  }
 
  #template {
  
  }

</style>
