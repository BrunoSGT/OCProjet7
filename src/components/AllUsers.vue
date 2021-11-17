<!-- pour afficher la liste des utilisateurs -->
<template> 
    <div>
        <AdminNavBar/>   
    </div> 
    <div id="allUsers" v-for="user in allUsers" :key="user">
        <ul>
            <li> 
                <div class="usersList">
                    <img v-bind:src="user.imageUrl" class="photoProfil" alt="photo de l'utilisateur">
                    <div v-bind:href="user.url"> utilisateur {{  user.id }} <br> {{ user.firstname }}, {{ user.lastname }}</div>
                </div>
                <div class="setUserVisible">
                    <input type="checkbox" :id="'checkUser_'+String (user.id)" v-model=user.status true-value=1 false-value=0
                    @click="submit(user.id, user.status)">
                    <label :for="'checkUser_'+String (user.id)">Utilisateur visible</label>
                </div>
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
        const token= sessionStorage.getItem('token'); //jeton
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
    opacity: 0.8;
}

#allUsers ul {
    list-style-type: none;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}
.usersList {
    background-color: #122443;
    color: white;
    padding: 10px;
    border-radius: 15px;
}
.photoProfil {
    margin-top: 5px;
    width: 30px;
    border-radius: 50%;
}
.setUserVisible {
    color: black;
    margin-top: 10px;
    margin-bottom: 25px;
}

</style>