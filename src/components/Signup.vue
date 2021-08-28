<template> 
    <p>Merci de vous inscrire ci-dessous</p>
    <form class="form" id="signup-form">
            <div class="form__field">
                <label for="firstName">Prénom</label>
                <!--La directive  v-model  permet de s'assurer que les éléments du formulaire sont reliés à la bonne propriété du data store.-->
				<input v-model="firstName" name="firstName" id="firstName" data-displayname="Prenom" class="form-control" required 
                aria-required="true" type="text">
                <span v-if="msg.firstName">{{ msg.firstName}}</span>
            </div>
            <div class="form__field">
                <label for="lastName">Nom</label>
				<input v-model="lastName" name="lastName" id="lastName" data-displayname="Nom" class="form-control" required 
                aria-required="true" type="text">
            </div>
            <div class="form__field">
                <label for="email">Adresse email</label>
                <input v-model="email" name="email" id="email" data-displayname="Adresse email" class="form-control" required  aria-required="true" type="email"> <br>
                <span v-if="msg.email">{{ msg.email}}</span>
            </div>
            <div class="form__field">
                <label for="password">Mot de passe</label>
                <input v-model="password" name="password" id="password" data-displayname="Mot de passe" class="form-control" required  aria-required="true" type="text"> <br>
                <span v-if="msg.password">{{ msg.password}}</span>
            </div>
            <button @click.prevent="submit()">S'inscrire</button>
            <!-- <button @click.prevent="submit"  id="btn btn--submit">Envoyer</button> -->
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
            password: "",
            msg:[],
            erreur:[]
        }
    },
    
    // utilisation de watch pour valider le form avant l'envoi au server
    watch: {
        firstName(value){
            this.firstName = value;
            this.validateFirstName(value);
        },
        email(value){
            this.email = value;
            this.validateEmail(value);
        },
        password(value){
            this.password = value;
            this.validatePassword(value);
        }
    },
    // methode de récupération des valeurs saisies et envoi à la DB
    methods: {
        //méthode de validation du form
        validateFirstName(value){
            if(value == ""){
                this.msg['firstName'] = 'Please enter your firstname !';
                this.erreur['firstName'] = true
            }else{
                this.erreur['firstName'] = false;
                this.msg['firstName'] = ''
            }
        },
        
        validateEmail(value){
            if (/^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                this.msg['email'] = '';
                this.erreur['email'] = false
            }else{
                this.msg['email'] = 'Invalid Email Address';
                this.erreur['email'] = true               
            }
        },
        validatePassword(value){
            let difference = 8 - value.length;
            if (value.length<8) {
                this.msg['password'] = 'Doit contenir 8 caractères minimum avec une majuscule, une minuscule, sans espace ! '+ difference + ' caractères restants' ;
                this.erreur['password'] = true
            }else{
                this.msg['password'] = '';
                this.erreur['password'] = false
            }
        },
        warn: function (message, event) {
    // maintenant nous avons accès à l'évènement natif
            if (event) {
                event.preventDefault()
            }else{
            alert(message)
            }
        },       

        //envoi du form à la DB
        submit: function () { 
            const contact = {
                "firstname": this.firstName,
                "lastname": this.lastName,
                "email": this.email,
                "password": this.password
            }
            if(this.erreur['firstName'] !== true && this.erreur['email'] !== true && this.erreur['password'] !== true){
            console.log(contact)
            console.log(this.erreur)
            axios.post('http://localhost:3000/api/signup', contact )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
    // fonction de récup + assign valeur à la variable message (this.message)+ mounted (get)
    
}
</script>

<style scoped lang="scss">

form {
    //display: block;
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
    //display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 4px solid #3896f5;
    border-radius: .9rem;
    transition: border-color .50s ease-in-out,box-shadow .50s ease-in-out;
}
span {
    background-color: rgb(168, 245, 248);
    color: red;
}
</style>