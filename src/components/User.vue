<!-- pour afficher la liste des utilisateurs -->
<template> 
    
    <div id="allUsers">
        <ul>
            <li v-for="user in allUsers" :key="user">
                <a v-bind:href="user.url"> {{ user.id }} </a> : {{ user.firstName }}, {{ user.lastName }}, {{ user._id  }} 
            </li>
        </ul>
    </div>
            
    

</template>

<script> 
export default {
    name:'AllUsers',
    props: {
        data : [""]
    }
}
/*    // fonction de récup des valeurs saisies 
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
            axios.get('localhost:3000/api/users', {
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
            axios.get('http://localhost:3000/api/user/'//,{headers:{'Authorization': "bearer " + emplacement du token}})
            )
            .then(response =>{
                this.allUsers = response.data })
            
            .catch(error => { console.error(error)});
        }
    } */

</script>



<style scoped lang="scss">
form {
  margin: 2em auto;
  max-width: 750px;
}
</style>