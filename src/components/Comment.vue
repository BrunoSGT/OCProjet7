<template>
    
    <form id="Comment-form">
        <div class="form__field--commentBubble">
            <label for="titleBubble"></label>
            <input v-model="title" name="titleBubble" id="titleBubble" data-displayname="Titre du commentaire" class="form-control" required  aria-required="true" type="text">
            <label for="commentBubble"></label>
            <input v-model="content" name="commentBubble" id="commentBubble" data-displayname="Nouveau commentaire" class="form-control" required  aria-required="true" type="text">
        </div>
    </form>
    <!-- <input v-model="signature" name="signature" id="signature" aria-required="true" type="text"> -->
    <button @click.prevent="submit"  class="btn btn--submit">Envoyer</button>
    
</template>

<script>
import axios from "axios"
export default {
    name:"Comment-form",
    
    // fonction de récup des valeurs saisies (data store)
    data() {
        return{ 
            title: "",
            content: ""
        }
    },
    // methode de récupération des valeurs saisies et envoi à la DB
    methods: {
        submit: function () { // eslint-disable-line no-unused-vars
        console.log(this.title + this.content )
            axios.post('http://localhost:3000/comment/', {
                "title": this.title,
                "content": this.content,
                "postId": this.$route.params.id,
                // "userId": this.$route.params.user_id
            })
            
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });     
        }
    }
}   // fonction de récup + assign valeur à la variable message (this.message)+ mounted (get)
</script>

<style lang="scss">

#Comment-form {
    margin-left: 25%;
    margin-top: 20px;
    border-top: solid;
    border-top-color: rgb(140, 0, 255);
    border-top-width: 10px;
    border-top-left-radius: 1.5em ;
    border-top-right-radius: 1.5em;  

    border-bottom-style: solid;
    border-top-color: rgb(140, 0, 255);
    border-bottom-width: 10px;
    border-bottom-left-radius: 1.5em ;
    border-bottom-right-radius: 1.5em;
}

#titleBubble {
    background-color: #122443;
    color: white;
    margin-bottom: 10px;
    width: 100%;
}
#commentBubble  {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    flex-basis: 15px;
    width: 100%;
    height: fit-content;
    background-color: #122443b5;
    color: white;
}


       



</style>