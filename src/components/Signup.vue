<template> 
    <p>Please register </p>
    <form class="form" id="signup-form">
            <div class="form__field">
                <label for="firstName">Prénom</label>
                <!--La directive  v-model  permet de s'assurer que les éléments du formulaire sont reliés à la bonne propriété du data store.-->
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
            <button @click.prevent="submit"  class="btn btn--submit">Envoyer</button>
        </form>

</template>

<script> 
import axios from "axios"
export default {
    name:'Signup-form',
    // fonction de récup des valeurs saisies (data store)
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
            const contact = {
                "firstname": this.firstName,
                "lastname": this.lastName,
                "email": this.email,
                "password": this.password
            }
            console.log(contact)
            axios.post('http://localhost:3000/api/signup', contact )
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

.form__field {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
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
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .50s ease-in-out,box-shadow .50s ease-in-out;
}
</style>