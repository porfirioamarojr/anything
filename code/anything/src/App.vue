<template id="template">
  <div id="app">
    <table align="center" width="900">
      <tr>
        <td colspan="2">
          <!--<Login/>
          <Cadastro/> 
<CadastroCliente/>-->
         
          <h3>Cadastro: </h3>
          <small id="nomeErro" v-show="deuErro">O nome inválido, tente novamente!</small><br>
          <input type="text" placeholder="nome" v-model="nomeField"><br>
          <input type="email" placeholder="email" v-model="emailField"><br>
          <input type="number" placeholder="idade" v-model="idadeField"><br>
          <button @click="cadastrarUsuario">Cadastrar</button>
          <hr>
          <div v-for="(cliente, index) in clientes" :key="cliente.id">
            <h6>{{ index + 1 }}</h6>
            <Cliente :cliente="cliente" @meDelete="deletarUsuario($event)"/>  
            </div>
          <br>
          <br>
          <br>
          
           
          
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

/*
import Formulario from "./components/Formulario"
import Produto from './components/Produto'
import Cadastro from './components/Cadastro'
import CadastroEndereco from './components/CadastroEndereco'

*/
import Cliente from './components/Cliente'
//import Cadastro from './components/Cadastro'
//import CadastroCliente from './components/CadastroCliente'
//import Login from './components/Login'
/*export default {
  name: 'App',
  components: {
    formulario
*/
export default {
  name: 'App',
  data(){
    return {
      deuErro: false,
      nomeField: "",
      emailField: "",
      idadeField: 0,
      clientes: [
        {
          id: 3,
          nome: "Coxinha",
          numero: 11010110010,
          email: "coxinha@gmail.com",
          idade: "09/09/1990"
        },{
          id: 2,
          nome: "Miguel",
          numero: 96969696969,
          email: "miguel@gmail.com",
          idade: "01/01/1991"
        },{
          id: 1,
          nome: "Amaro",
          numero: 83999986464,
          email: "algumemail@gmail.com",
          idade: "06/09/1998"
        }
      ]
    }
  },
  components:{
    Cliente,
    //CadastroCliente,
    //Login,
    //Produto,
    //Formulario,
    //Cadastro,
    //CadastroEndereco


  },
  methods: {
    cadastrarUsuario: function(){
      if(this.nomeField == "" || this.nomeField == " " || this.nomeField.length < 3){
        console.log("Erro na validação");
        this.deuErro = true;
      }else{
        this.clientes.push({nome: this.nomeField, email: this.emailField, idade:  this.idadeField, id: Date.now()})
        this.nomeField = "";
        this.emailField = "";
        this.idadeField = 0;
        this.deuErro = false;
      }
    },
    deletarUsuario: function($event){
      console.log("Recebendo Evento");
      console.log($event.idDoCliente);
      $event.component.testar();
      var id = $event.idDoCliente;
      var novoArray = this.clientes.filter(cliente => cliente.id != id);
      this.clientes = novoArray;
    }
  }
  
}
</script>

<style>
 #nomeErro{
   color: red;
 }
</style>

<!--<style>
  
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
-->
