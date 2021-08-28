<template>
    <div id="Login-interface">Connectez-vous 😃</div>
    <form class="form" id="Login-form">
        <div class="form__field">
            <label for="firstname">Prénom</label>
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
        <button @click.prevent="submit" class="btn btn--submit">Se connecter</button>
        <button @click.prevent="deleteAccount" class="btn btn--delete">Supprimer mon compte</button>
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
        // stockage local des infos durant la session de navigation
        sessionStorage.setItem("admin",response.data.admin);
        sessionStorage.setItem("user_id",response.data.userId);
        sessionStorage.setItem("token",response.data.token);
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

<style scoped lang="scss">
form {
    margin: auto;
    max-width: 480px;
}

.form__field {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 6px;
    font-size: 16px;
}
.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 4px solid #e4e723;
    border-radius: .9rem;
    transition: border-color .70s ease-in-out,box-shadow .70s ease-in-out;
}
</style>