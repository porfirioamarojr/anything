<template>
  <div id="login" class="column is-half is-offset-one-third is-one-fifth is-right">

    <img class="is-small" id="logo" src="../assets/LOGO.png"/>

    <div id="form_icons">
        <img class="is-small" id="icon" src="../assets/do_utilizador.png"/>
    </div>
    
    <form>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model="email" required/>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
        
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="cidade" required/>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      
      <div class="field">
        <p class="control">
          <button class="button is-success">
            Login
          </button>
        </p>
      </div>

      <div>
        <input class="submit" type="submit" value="Criar um cadastro"/>
        <h6>Não tem cadastro? <a href="cadastro.html">Cadastre-se</a>
        </h6>
      </div>
    </form>
      
  </div>
</template>

<script>
//import Cadastro from './components/Cadastro'

export default {
    components:{
    //Cliente,
    //CadastroCliente,
    //Login,
    //Produto,
    //Formulario,
    //Cadastro,
    //CadastroEndereco


  },
  methods: {
    cadastrarUsuario: function(){
      if(this.nomeField == "" || this.nomeField == " " || this.nomeField.length < 3)
        console.log("Erro na validação");
      else{
        this.clientes.push({nome: this.nomeField, email: this.emailField, idade:  this.idadeField, id: Date.now()})
        this.nomeField = "";
        this.emailField = "";
        this.idadeField = 0;
      }
    } 
  }
}
</script>

<style scoped>
#login {
  margin-top: 12%;
}

</style>