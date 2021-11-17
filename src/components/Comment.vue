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
            user_id: sessionStorage.getItem('user_id')
        }
    },
    // methode de récupération des valeurs saisies et envoi à la DB
    methods: {
        submit: function () { // eslint-disable-line no-unused-vars
        const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
        console.log(this.title + this.content )
            axios.post('http://localhost:3000/comment/', {headers:{'Authorization': "bearer " + token},
                "title": this.title,
                "content": this.content,
                "postId": this.$route.params.id,
                "userId": this.user_id
            })
            
        .then(function (response) {
        console.log(response);
        location.reload();
        })
        .catch(function (error) {
        console.log(error);
        });     
        }
    }
}   // fonction de récup + assign valeur à la variable message (this.message)+ mounted (get)
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