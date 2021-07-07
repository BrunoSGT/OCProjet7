<template> <!-- doit créer la div "bubbleOfPosts" dans le HTML-->
    
    <div class="allUsers">
        <ul>
            <li v-for="user in allUsers" :key="user">
                <a v-bind:href="user.url"> {{ user.firstName }} </a> : {{ user.lastName }}, {{ user._id  }} 
            </li>
        </ul>
    </div>
            
    

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
}
// récup et affichage de la liste des utilisateurs
import axios from "axios"
    export default {
        data() {
            return {
                allUsers: [],
                showUsers: false
            }
        },
        mounted() {
            axios.get('http://localhost:3000/user/'//,{headers:{'Authorization': "bearer " + emplacement du token}})
            )
            .then(response =>{
                this.allUsers = response.data })
            
            .catch(error => { console.error(error)});
        }
    }
</script>

<style scoped lang="scss">
form {
  margin: 2em auto;
  max-width: 750px;
}
</style>