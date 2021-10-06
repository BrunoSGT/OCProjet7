<!-- pour afficher la liste des utilisateurs -->
<template> 
    <div>
        <AdminNavBar/>   
    </div> 
    <a>barre de recherche</a>
    <div id="allUsers" v-for="user in allUsers" :key="user">
        <ul>
            <li> 
                <div class="usersList" v-bind:href="user.url"> {{ user.id }}  : {{ user.firstname }}, {{ user.lastname }}
                </div>
                <input type="checkbox" :id="'checkUser_'+String (user.id)" v-model=user.status
                @click="submit(user.id, user.status)">  <!--, user.visible-->
                <label :for="'checkUser_'+String (user.id)">{{user.status}}Utilisateur visible</label>
            </li>
        </ul>
    </div> 
</template>

<script> 
import AdminNavBar from "./AdminNavBar";
import axios from "axios"
export default {
    name: 'AllUsers',
    components: {AdminNavBar},
    data() {
        return {
            allUsers: []
        }
    },
    mounted() {
        const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
        axios.get('http://localhost:3000/api/user',{headers:{"Authorization": "Bearer " + token}})
        
        .then(response =>{
            console.log(response),
            this.allUsers = response.data })
        
        .catch(error => { console.error(error)});
    },
    methods: {
        submit(id, statusValidation){ //, userVisibility
            axios.put('http://localhost:3000/api/user/'+id,
            {   
                status: statusValidation ? 0:1 
                // visible: userVisibility ? 0:1 
            })
            
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            
            });
        }
    }                
}

</script>

<style scoped lang="scss">
#allUsers {
    background-color: #aeaeae52;
}
.usersList {
    background-color: #122443;
    color: white;
}
</style>