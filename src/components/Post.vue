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
            </div>
            <div class="form__field">
                <label for="contentPostBubble"></label>
                <textarea v-model="content" name="contentPostBubble" id="contentPostBubble" data-displayname="Nouveau post" class="form-control" required  aria-required="true" type="text" placeholder="texte de votre post ( 255 caractères max. )"></textarea>
            </div>
        </div>
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
//Ajout du 17/10 car envoi=OK même sans title    // utilisation de watch pour valider le form avant l'envoi au server
    // watch: {
    //     title(value){
    //         this.title = value;
    //         this.validateTitle(value);
    //     },
    //     content(value){
    //         this.content = value;
    //         this.validateContent(value);
    //     }
    // },
    methods: {

// la fonction checkForm ne pas opérationnelle au 17/10 // methode de validation des valeurs saisies avant l'envoi à la DB        
        checkForm: function (e) {
            if (this.title && this.content) {
                return true;
            }
            this.errors = [];
            if (!this.title) {
                this.errors.push('Title required !');
            }
            if (!this.content) {
                this.errors.push('Content required !');
            }
            e.preventDefault();
        },
        //méthode de validation du form
        // validateTitle(value){
        //     if(value == ""){
        //         this.msg['firstName'] = 'Please enter your firstname !';
        //         this.erreur['firstName'] = true
        //     }else{
        //         this.erreur['firstName'] = false;
        //         this.msg['firstName'] = ''
        //     }
        // },
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
                location.replace("/#/wallofposts");
            })
            .catch(function (error) {
            console.log(error);
            });     
        }
    }
}   // fonction de récup + assign valeur à la variable message (this.message)+ mounted (get)
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

</style>