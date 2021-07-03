<template> <!-- doit créer la div "bubbleOfPosts" dans le HTML-->
    
    <form class="form" id="signup-form">
            <div class="form__field">
                <label for="firstName">Prénom</label>
				<input v-model="firstName" name="firstName" id="firstName" data-displayname="Prenom" class="form-control" required 
                aria-required="true" type="text">
            </div>
            <div class="form__field">
                <label for="lastName">Nom</label>
				<input v-model="lastName" name="lastName" id="lastName" data-displayname="Nom" class="form-control" required 
                aria-required="true" type="text">
            </div>
            <div class="form__field">
                <label for="email">Adresse email</label>
                <input v-model="email" name="email" id="email" data-displayname="Adresse email" class="form-control" required  aria-required="true" type="email">
            </div>
            <div class="form__field">
                <label for="password">Mot de passe</label>
                <input v-model="password" name="password" id="password" data-displayname="Mot de passe" class="form-control" required  aria-required="true" type="text">
            </div>
            <button v-on:click="submit"  class="btn btn--submit">Envoyer</button>
        </form>

</template>

<script> // doit créer
export default {
    name:'Signup-form',
    // fonction de récup des valeurs saisies 
    data() {
        return{ 
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    },
    // methode de récupération des valeurs saisies et envoi à la DB
    methods: {
        submit: function (event) { // eslint-disable-line no-unused-vars
            const axios = require('axios');
            axios.post('localhost:3000/api/signup', {
                "firstname": this.firstName,
                "lastname": this.lastName,
                "email": this.email,
                "password": this.password
            })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
            // `this` inside methods points to the Vue instance
            alert('Hello ' + this.firstName + " " + this.lastName + '!')
            // `event` is the native DOM event
        }
    }
    // fonction de récup + assign valeur à la variable message (this.message)+ mounted (get)
    
}
</script>

<style scoped lang="scss">
form {
  margin: 2em auto;
  max-width: 750px;
}
</style>