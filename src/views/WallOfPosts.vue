<!--Murs des Posts visibles par les utilisatuers autorisés-->
<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <div id="wallOfPosts">
        <h1>Le mur des posts</h1>
    </div>
    <div class="allPostsBubbles">
        <ul>
            <li class="postsContainer" v-for="post in wallOfPosts" :key="post.visible">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} </div>  
                <div class="contentPostBubble">{{ post.content }}, {{ post.id }}, <!--{{ username}},--> {{ post.updatedAt}} 
                    <div class="linkToComment"><router-link :to="'/posttocomment/' + post.id ">Ajouter un commentaire</router-link></div>  
                    <div class="linkToAllComments"><router-link :to="'/allcomments/' + post.id ">Tous les commentaires</router-link></div>  
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
        const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
        axios.get('http://localhost:3000/post/wallOfPosts',{headers:{'Authorization': "bearer " + token}}
        )
        .then(response =>{
            this.wallOfPosts = response.data;
            this.visible = response.data.visible})
        .catch(error => { console.error(error)});
    },
}
</script>

<style lang="scss" scoped>
.allPostsBubbles ul {
    padding: 0;
}
.postsContainer {
    opacity: 0.8;
}
.titlePostBubble {
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: #122443;
    color: white;
}
.contentPostBubble  {
    flex-basis: 15px;
    width: 50%;
    height: fit-content;
    margin-left: 25%;
    background-color: #122443a9;
    color: white;
    border: 4px solid #122443a9;
    border-radius: .3rem;   
    box-shadow: 0px 0px 20px #122443a9;
    height: 100%;
}
.contentPostBubble:hover {
    transform: scale(1.15);
    transition: transform 500ms; 
}
.linkToComment{
    font-weight: bold;
    margin-top: 6px;
}
.linkToComment a {
    color: white;
}
.linkToAllComments {
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 10px;
}
.linkToAllComments a {
    color: white;
}
</style>
