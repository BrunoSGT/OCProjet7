<!--Murs des Posts visibles par les utilisatuers autorisés-->
<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <div id="wallOfPosts">
        <h1>Le mur des posts</h1>
    </div>
    <a>barre de recherche</a>
    <div class="allPostsBubbles">
        <ul>
            <li v-for="post in wallOfPosts" :key="post.visible">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} </div>  
                <div class="contentPostBubble">{{ post.content }}, {{ post.id }}, <!--{{ username}},--> {{ post.updatedAt}} 
                    <div class="linkToComment"><router-link :to="'/posttocomment/' + post.id ">Ajouter un commentaire</router-link></div>  
                    <div class="linkToAllComments"><router-link :to="'/allcomments/' + post.id ">Tous les commentaire</router-link></div>  
                </div>
            </li>
        </ul>
    </div>
    

</template>

<script>
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import axios from "axios"
export default {
    name: 'WallOfPosts',
    components: {UserConnectedNavBar},
    data() {
        return {
            status: "",
            visible: true,
            wallOfPosts: [],
            showPosts: false
        }
    },
    mounted() {
        this.status = sessionStorage.getItem('status');
        axios.get('http://localhost:3000/post/wallOfPosts'//,{headers:{'Authorization': "bearer " + emplacement du token}})
        )
        .then(response =>{
            this.wallOfPosts = response.data;
            this.visible = response.data.visible})
        .catch(error => { console.error(error)});
    },
}
</script>

<style>
.titlePostBubble {
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #e4e723;
    border-radius: .9rem;
    box-shadow: 0px 0px 20px #a4a70a;
    background-color: #fff38a;
}
.contentPostBubble  {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    flex-basis: 15px;
    width: 50%;
    height: fit-content;
    margin-left: 25%;
    background-color: #ddffc6;
    border: 4px solid #98fa3c;
    border-radius: .9rem;   
    box-shadow: 0px 0px 20px #709115;
    height: 100%;
}
</style>
