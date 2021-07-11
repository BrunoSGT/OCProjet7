<template>
    <form id="Post-form">
        <div class="form__field--postBubble">
            <label for="titleBubble"></label>
            <input v-model="title" name="titleBubble" id="titleBubble" data-displayname="Titre du post" class="form-control" required  aria-required="true" type="text">
            <label for="postBubble"></label>
            <input v-model="content" name="postBubble" id="postBubble" data-displayname="Nouveau post" class="form-control" required  aria-required="true" type="text">
        </div>
    
    <!-- <input v-model="signature" name="signature" id="signature" aria-required="true" type="text"> -->
    <button @click.prevent="submit"  class="btn btn--submit">Envoyer</button>
    </form>
</template>

<script> 
import axios from "axios"
export default {
    name:'Post-form',
    // fonction de récup des valeurs saisies (data store)
    data() {
        return{ 
            title: "",
            content: "",
            visible: Boolean
        }
    },
    // methode de récupération des valeurs saisies et envoi à la DB
    methods: {
        submit: function (event) { // eslint-disable-line no-unused-vars
            axios.post('http://localhost:3000/api/post', {
                "title": this.title,
                "content": this.content,
                "visible": true
            })
            console.log(this.title + this.content )
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

</style>