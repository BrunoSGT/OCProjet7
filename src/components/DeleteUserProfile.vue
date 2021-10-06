<template>
    <button v-on:click="deleteData()">Supprimer mon profil</button>
    <router-link to="/"></router-link>
</template>

<script>
import axios from "axios"
export default {
    name: 'DeleteUserProfile',
    methods: {
        deleteData() {
            axios.delete('http://localhost:3000/api/user/'+id, {headers:{"Authorization": "Bearer " + token}})
                //if(confirm("Etes-vous sûr de vouloir supprimer votre profil ?")
            .then(function(response){
                // application.fecthAllData();
                alert(response.data.message);
            })
        }
    }
}
</script>