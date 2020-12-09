<template>
<div>







<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Neumorphic Login - Free Bulma template</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/neumorphic-login.css">
  </head>

  <body>
    <section class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="login">
          <img src="https://logoipsum.com/logo/logo-1.svg" width="325px" />
          <form>
            <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="email" placeholder="hello@example.com" autocomplete="username" required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
              </div>
            </div>
            <br />
            <button class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
              Login
            </button>
          </form>
          <br>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="#">Create an Account</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </body>















  <div>
  <div id="login" class="column is-half is-offset-one-third is-one-fifth is-right">

    <img class="is-small" id="logo" src="../assets/LOGO.png"/>
  </div>
    
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
        <h6>Não tem cadastro?</h6> 
        <button class="submit" type="submit">
          <router-link to="/cliente">Cadastre-se</router-link>
        </button>
      </div>
    </form>
      
  </div>











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