<template>
    <div>
      <UserConnectedNavBar/>
    </div>
    <h1>Mon profil</h1>
    <section id="photo">
        <div class=" boxPhotoProfile">
            <input type="file" aria-controls="uploadFile" accept="image/*" @change="handleFiles()" name="images" id="uploadFile" placeholder="Photo">
        </div>
        <div id="previewSettings">
            <img v-bind:src="user.imageUrl" class="previewSettingsImg" alt="photo du profil utilisateur">
        </div>
        <input type="button" disabled name="sendPhoto" id="sendPhoto" value="Ajouter ma photo" @click="envoiModifPhotoProfil">
    </section>
    <section id="userDescription">
        <div class="userInfos">
            <table> 
                <tr>
                    <td class="usersInfosLabel">Identifiant</td><td>{{ user.id }}</td>
                </tr>
                <tr>
                    <td class="usersInfosLabel">Prénom</td><td>{{ user.firstname }}</td>
                </tr>
                <tr>
                    <td class="usersInfosLabel">Nom</td><td>{{ user.lastname }}</td>
                </tr>
            </table>
        </div>
    </section>
    <section id="deleteProfile">
        <p>😞si vous souhaitez nous quitter...</p>
        <p>👇</p>
    <button class="btn_submit" v-on:click="deleteUser()">Supprimer mon profil</button>
    </section>    
  
</template> 

<script>
// @ is an alias to /src
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import axios from "axios"
import router from '@/router/index'

const token= sessionStorage.getItem('token'); //jeton

export default {
    name: 'UserProfile',
    components: {
        UserConnectedNavBar  
    },
    data () {
        return {
            user: []            
        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/user/'+ sessionStorage.getItem('user_id'),{headers:{"Authorization": "Bearer " + token}})
        
        .then(response =>{
            this.user = response.data})
        .catch(error => { console.error(error)});
    },
    methods: {
        handleFiles(){ // Cette fonction permet d'avoir une miniature des fichiers qui vont être uploadés même si ils ne possèdent pas encore d'URLs
            document.getElementById("previewSettings").innerHTML = "";
            let files = document.getElementById("uploadFile").files;
            for (let i = 0; i < files.length; i++) {
                let img = document.createElement("img");
                img.file = files[i];
                img.style.width = "100px";
                img.style.borderRadius = "50%";
                document.getElementById("previewSettings").appendChild(img);
                var reader = new FileReader();
                reader.onload = ( function(aImg) {
                    return function(e) {
                        aImg.src = e.target.result; 
                    };
                })(img);
                reader.readAsDataURL(files[i]);
            }
            document.getElementById("sendPhoto").disabled = false;
        },
        envoiModifPhotoProfil(){ // Envoi des modifications de la photo de profil via une requete PUT
        console.log("ok");
            let input = document.getElementById("uploadFile");
            let file = input.files;
            let formData = new FormData();
            formData.append('images', file[0]);
            axios.put('http://localhost:3000/api/user/addUserPhoto/'+sessionStorage.getItem('user_id'), formData,{   //+sessionStorage.getItem('user_id') à la place de +id
                headers: {   
                    "Authorization": "Bearer " + token,
                    'Content-Type' : 'application/json',
                }
                  //envoi formData dans le corps de la requête
            })
            .then(
                alert("Photo enregistrée !"),
                // window.location.reload()
            )
            .catch(function (error) {
                console.log(error)
            }
        )},
        deleteUser: () => {
            let self = this
            var x = confirm("Etes-vous sûr de vouloir supprimer votre profil ?");
            if (x) {
            axios.delete('http://localhost:3000/api/user/'+ sessionStorage.getItem('user_id'),{headers:{"Authorization": "Bearer " + token}})
                    .then(function (response) {
                        console.log(response);
                        self.logout();
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        },
        logout: () => {
            sessionStorage.removeItem("admin");
            sessionStorage.removeItem("status");
            sessionStorage.removeItem("user_id");
            sessionStorage.removeItem("token");
            sessionStorage.clear();
            router.replace("/")
        },
        
    
    }
}
</script>

<style lang="scss" scoped>

#previewSettings {
    margin-bottom: 10px;
    margin-top: 15px;
}
.previewSettingsImg {
    width: 200px;
    border-radius: 50%;
}
#userDescription {
    font-weight: bold;
}
.userInfos{
    display: inline-block;
    margin: 16px;
    text-align: left;

}
.usersInfosLabel {
    display: inline-block;
    font-weight: normal;
    margin-right: 10px;
}
#deleteProfile {
    margin-top: 30px;
    margin-bottom: 15px;
}
.btn_submit {
    cursor: pointer;
    background-color: #122443;
    color: white;
    padding: 8px;
    border-radius: 7px;
    border: 2px solid black;
}
.btn_submit:hover {
    opacity: 0.7;
}

</style>