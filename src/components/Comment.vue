<template>
    <form id="commentForm">
        <div class="form__field--commentBubble">
            <label for="titleBubble"></label>
            <input v-model="title" name="titleBubble" id="titleBubble" data-displayname="Titre du commentaire" class="form-control" required  aria-required="true" type="text" placeholder="titre du commentaire (limité à 45 caractères)">
            <label for="commentBubble"></label>
            <textarea v-model="content" name="commentBubble" id="commentBubble" data-displayname="Nouveau commentaire" class="form-control" required  aria-required="true" type="text" placeholder="texte du commentaire (limité à 255 caractères)"></textarea>
        </div>
    </form>
    <button type="button" @click.prevent="submit"  class="btn btn--submit">Envoyer</button>
    
</template>

<script>
import axios from "axios"
export default {
    name:"Comment-form",
    
// fonction de récup des valeurs saisies (data store)
    data() {
        return{ 
            title: "",
            content: "",
            user_id: sessionStorage.getItem('user_id'),
            msg: [],
            erreurTitleBubble: true,
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
// methode de récupération des valeurs saisies et envoi à la DB
    methods: {
//méthode de validation du form
        validateTitle(value){
            if(value == ""){
                this.msg['titleBubble'] = 'Please enter title !';
                this.erreurTitleBubble = true
            }else{
                this.erreurTitleBubble = false;
                this.msg['titleBubble'] = ''
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
        submit: function () {
            const newComment = {
                'title': this.title,
                'content': this.content,
                'postId': this.$route.params.id,
                'userId': this.user_id
            }
            if(this.erreurTitleBubble !== true && this.erreurContent !== true){
                const token= sessionStorage.getItem('token'); //jeton
                axios.post('http://localhost:3000/comment/',newComment,{headers:{'Authorization': "bearer " + token}})
                .then(function (response) {
                console.log(response);
                location.reload();
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

#commentForm {
    margin-top: 25px;
    opacity: 0.8;
}
.form__field--commentBubble {
    border: 4px solid #122443;
    background-color: #122443b5;
    border-radius: 15px;
    margin-left: 25%;
    margin-bottom: 20px;
    margin-right: 5%;

}

#titleBubble {
    width: 50%;
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
#commentBubble  {
    width: 90%;
    margin-bottom: 20px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: white;
    font-family: system-ui, system-ui, sans-serif;
    font-size: 14px;
    color: #122443;
}
.btn {
    cursor: pointer;
    background-color: #101f3a;
    color: white;
    padding: 8px;
    border-radius: 7px;
    border: 2px solid black;
}
.btn:hover {
    opacity: 0.7;
}


       



</style>