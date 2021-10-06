<template>
    <p>Mon Profil</p>
    <div>
      <UserConnectedNavBar/>
    </div>
    <section id="photo">
    <input type="file" accept="image/*" @change="uploadImage($event)" id="file-imput">
    <button mat-raised-button @click="imageInput.click()">Ajouter une image</button> <!--color="primary"-->
    </section>
    <section id="userDescription">
        <div class="userInfos" v-bind:href="user.url"> {{ user.id }}, {{ user.firstname }}, {{ user.lastname }}
        </div>
    </section>
    <section id="deleteProfile">
        <p>Etes-vous sûr de vouloir vous effacer votre profil?😟</p>
    <button v-on:click="deleteUser(), logout">Supprimer mon profil</button>
    </section>    
  
</template>

<script>
// @ is an alias to /src
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
// import DeleteUserProfile from "@/components/DeleteUserProfile";
import axios from "axios"
import router from '@/router/index'

const token= JSON.stringify(sessionStorage.getItem('token')); //jeton

export default {
    name: 'UserProfile',
    components: {
        UserConnectedNavBar // ,DeleteUserProfile  
    },
    data () {
        return {
            user: []            
        }
    },
    mounted() {
        // const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
        axios.get('http://localhost:3000/api/user/'+ sessionStorage.getItem('user_id'),{headers:{"Authorization": "Bearer " + token}})
        
        .then(response =>{
            console.log(response),
            this.user = response.data })
        
        .catch(error => { console.error(error)});
    },

    
    uploadImage(event) {
        const URL = 'http://localhost:3000/api/user/ajoutPhoto';

        let data = new FormData;
        data.append('name', 'my-picture');
        data.append('file', event.target.files[0]);

        let config = {
            header : {
                'Content-Type' : 'image/png'
            }
        }
        axios.put(
            URL,
            data,
            config
        ).then(
            response => {
                console.log('image upload response > ', response)
            }
        )
    },

    methods: {

        deleteUser: () => {
            axios.delete('http://localhost:3000/api/user/'+ sessionStorage.getItem('user_id'),{headers:{"Authorization": "Bearer " + token}})
        
            .then(function (response) {
                console.log(response);
                
                location.replace("/")

                        
            })
            
            .catch(function (error) {
                console.log(error);
            });
        },
        logout() {
            sessionStorage.removeItem("admin");
            sessionStorage.removeItem("status");
            sessionStorage.removeItem("user_id");
            sessionStorage.removeItem("token");
            sessionStorage.clear();
            //router.replace("/login")
            router.replace("/")
        }
    
    }
}
</script>

<style lang="scss">

</style>