<template>
    <form id="Comment-form">
        <div class="form__field--commentBubble">
            <label for="titleBubble"></label>
            <input v-model="title" name="titleBubble" id="titleBubble" data-displayname="Titre du commentaire" class="form-control" required  aria-required="true" type="text">
            <label for="postBubble"></label>
            <input v-model="content" name="commentBubble" id="commentBubble" data-displayname="Nouveau commentaire" class="form-control" required  aria-required="true" type="text">
        </div>
    
    <!-- <input v-model="signature" name="signature" id="signature" aria-required="true" type="text"> -->
    <button @click.prevent="submit"  class="btn btn--submit">Envoyer</button>
    </form>
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
                "userId": 1
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

#commentBubble  {
    display: flex;
    width: 50%;
    height: fit-content;
    margin-left: 25%;
    background-color: #f5bcef;
       

}

</style>