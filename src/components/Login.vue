<template>
    <form class="form" id="Login-form">
        <div class="form__field">
            <label for="firstname">Firstname</label>
            <input v-model="firstname" name="firstname" id="firstname" data-displayname="firstname" class="form-control" required  aria-required="true" type="text">
        </div>
        <div class="form__field">
            <label for="email">Adresse email</label>
            <input v-model="email" name="email" id="email" data-displayname="Adresse email" class="form-control" required  aria-required="true" type="email">
        </div>
        <div class="form__field">
            <label for="password">Mot de passe</label>
            <input v-model="password" name="password" id="password" data-displayname="Mot de passe" class="form-control" required  aria-required="true" type="text">
        </div>
        <button @click.prevent="submit" class="btn btn--submit">Envoyer</button>
    </form>
</template>                   

<script>
import axios from "axios"
export default {
    name:'Login-form',
    // fonction de récup des valeurs saisies 
    data() {
        return{ 
            firstname: "",
            email: "",
            password: ""
        }
    },
    // methode de récupération des valeurs saisies et envoi à la DB
    methods: {
        submit: function (event) { // eslint-disable-line no-unused-vars
            axios.post('http://localhost:3000/api/login', {
                "firstname": this.firstname,
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
            alert('Hello ' + this.firstname + '!')
            // `event` is the native DOM event
        }
    }   
    // fonction de récup + assign valeur à la variable message (this.message)+ mounted (get)
    
}
</script>