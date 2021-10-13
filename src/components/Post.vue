<template>
    <form id="Post-form">
        <p v-if="errors.length">Please correct the following error(s):
                <ul>
                    <li v-for="error in errors" v-bind:key="error"> {{ error }}</li>
                </ul>
            </p>
        <div class="form__field--postBubble">
            <label for="titlePostBubble"></label>
            <input v-model="title" name="titlePostBubble" id="titlePostBubble" data-displayname="Titre du post" class="form-control" required  aria-required="true" type="text" placeholder="titre de votre post">
            <label for="contentPostBubble"></label>
            <input v-model="content" name="contentPostBubble" id="contentPostBubble" data-displayname="Nouveau post" class="form-control" required  aria-required="true" type="text" placeholder="texte de votre post">
        </div>
    
    <!-- <input v-model="signature" name="signature" id="signature" aria-required="true" type="text"> -->
    <button type="button" @click="submit" id="btn btn--submit">Envoyer</button>
    </form>
</template>

<script> 
import axios from "axios"
// const token= JSON.stringify(sessionStorage.getItem('token')); //jeton

export default {
    name:'Post-form',
    // fonction de récup des valeurs saisies (data store)
    data() {
        return{ 
            errors: [],
            title: "",
            content: "",
            user_id: sessionStorage.getItem('user_id')
        }
    },
    
    methods: {
// methode de validation des valeurs saisies avant l'envoi à la DB        
        checkForm: function (e) {
            if (this.title && this.content) {
                return true;
            }
            this.errors = [];
            if (!this.title) {
                this.errors.push('Title required.');
            }
            if (!this.content) {
                this.errors.push('Content required.');
            }
            e.preventDefault();
        },
// methode de récupération des valeurs saisies et envoi à la DB
        submit: function () { 
        console.log(this.title + this.content )
            axios.post('http://localhost:3000/post', {//headers:{'Authorization': "bearer " + token},
     
                "title": this.title,
                "content": this.content,
                "userId": this.user_id
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

#titlePostBubble {
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: white;
    color: #122443;
}
#contentPostBubble  {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    flex-basis: 15px;
    width: 50%;
    height: fit-content;
    margin-left: 25%;
    margin-bottom: 20px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: white;
    color: #122443;
    height: 100%;
}

</style>