<template>
<div>
<head>
<title>Title of the document</title>
<link href="style.css" rel="stylesheet">
</head>

<body>
    <img id="logo" src="..\assets\LOGO.png"/>

    <div id="form_borda">
        <div id="form_icons">
            <img id="icon" src="../assets/do_utilizador.png"/>
            <label id="cadastro">Login</label>
        </div>
        
        <form>
            <label class="l85">email</label> 
            <br>
            <input type="email" v-model="email" required/>
            <br>
            <label class="l85">senha</label>
            <br>
            <input type="password" v-model="cidade" required/>
            <br>
            <input class="submit" type="submit" value="Criar um cadastro"/>
            <h6>não tem cadastro? <a href="cadastro.html">cadastre-se</a>
            </h6>
        </form>
    </div>
    
</body>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>