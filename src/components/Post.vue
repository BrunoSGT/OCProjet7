<template>
    <form id="Post-form">
        <p v-if="errors.length">Please correct the following error(s):
                <ul>
                    <li v-for="error in errors" v-bind:key="error"> {{ error }}</li>
                </ul>
        </p>
        <div class="formNewPost">
            <div class="form__field">
                <label for="titlePostBubble"></label>
                <input v-model="title" name="titlePostBubble" id="titlePostBubble" data-displayname="Titre du post" class="form-control" required  aria-required="true" type="text" placeholder="titre de votre post">
                <span v-if="msg.title">{{ msg.title}}</span>
            </div>
            <div class="form__field">
                <label for="contentPostBubble"></label>
                <textarea v-model="content" name="contentPostBubble" id="contentPostBubble" data-displayname="Nouveau post" class="form-control" required  aria-required="true" type="text" placeholder="texte de votre post ( 255 caractères max. )"></textarea>
            </div>
        </div>
    <button id="btn_submit" @click.prevent="submit()">Envoyer</button>
    </form>
</template>

<script> 
import axios from "axios"
export default {
    name:'Post-form',
    // fonction de récup des valeurs saisies (data store)
    data() {
        return{ 
            errors: [],
            title: "",
            content: "",
            user_id: sessionStorage.getItem('user_id'),
            msg: [],
            erreurTitlePostBubble: true,
            erreurContent: true,
        }
    },
// utilisation de watch pour valider le form avant l'envoi au server
    watch: {
        title(value){
            this.title = value;
            this.validateTitle(value);
        },
        content(value){
            this.content = value;
            this.validateContent(value);
        }
    },
    methods: {
//méthode de validation du form
        validateTitle(value){
            if(value == ""){
                this.msg['titlePostBubble'] = 'Please enter title !';
                this.erreurTitlePostBubble = true
            }else{
                this.erreurTitlePostBubble = false;
                this.msg['titlePostBubble'] = ''
            }
        },
        validateContent(value){
            if(value == ""){
                this.msg['content'] = 'Please enter your content !';
                this.erreurContent = true
            }else{
                this.erreurContent = false;
                this.msg['content'] = ''
            }
        },
        warn: function (message, event) {
            if (event) {
                event.preventDefault()
            }else{
            alert(message)
            }
        },
// methode de récupération des valeurs saisies et envoi à la DB
        submit: function () { 
            const newPost = {
                'title': this.title,
                'content': this.content,
                'userId': this.user_id
            }
            if(this.erreurTitlePostBubble !== true && this.erreurContent !== true){
                const token= sessionStorage.getItem('token'); //jeton
                axios.post('http://localhost:3000/post',newPost,{headers:{'Authorization': "bearer " + token}
                })
                .then(function (response) {
                    console.log(response);
                    location.replace("/#/wallofposts");
                })
                .catch(function (error) {
                console.log(error);
                });     
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.formNewPost {
    background-color: #122443;
    color: white;
    padding: 10px;
    border-radius: 15px;
    margin-right: 5%;
    margin-bottom: 20px;
    margin-left: 5%;
    opacity: 0.8;
}

#titlePostBubble {
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: white;
    font-family: system-ui, system-ui, sans-serif;
    font-size: 14px;
    color: #122443;
    padding-bottom: 0.3em;
}
#contentPostBubble  {
    width: 50%;
    margin-bottom: 20px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: white;
    font-family: system-ui, system-ui, sans-serif;
    font-size: 14px;
    color: #122443;
}
#btn_submit {
    cursor: pointer;
    background-color: #101f3a;
    color: white;
    padding: 8px;
    border-radius: 7px;
    border: 2px solid black;
}
#btn_submit:hover {
    opacity: 0.7;
}

</style>