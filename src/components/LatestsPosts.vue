<!--Les 4 derniers Posts visibles par les utilisateurs autorisés-->
<template>
    <UserConnectedNavBar/>
    <h1>Derniers posts</h1>
    <div class="LatestPostsBubbles">
        <ul>
            <li class="postsContainer" v-for="post in wallOfPosts" :key="post">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} </div>  
                <div class="contentPostBubble">
                    <div><img v-bind:src="post.user.imageUrl" class="photoProfil" alt="photo de l'utilisateur"/></div>
                    <div>{{ post.content }} <br/><br/> {{ post.updatedAt}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
import UserConnectedNavBar from "./UserConnectedNavBar.vue"
export default {
    components: {UserConnectedNavBar},
    data() {
        return {
            user: [],
            wallOfPosts: [],
            showPosts: false //true 
        }
    },
        
    mounted() {
        const token= sessionStorage.getItem('token'); //jeton
        axios.get('http://localhost:3000/post/latestsposts',{headers:{'Authorization': "bearer " + token}})
        
        .then(response =>{
            this.wallOfPosts = response.data })
        
        .catch(error => { console.error(error)});
    }
}
</script>

<style lang="scss" scoped>

.postsContainer {
    opacity: 0.8;
}
.LatestPostsBubbles {
    text-align: center;
}
.photoProfil {
    margin-top: 5px;
    width: 30px;
    border-radius: 50%;
}
li {
    margin-bottom: 10px;
    margin-left: 2em;
}
.titlePostBubble {
    width: 50%;
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: #122443;
    color: white;
}
.contentPostBubble { 
    height: fit-content;
    margin-left: 25%;
    margin-right: 10%;
    background-color: #122443d4;
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
/* Ecrans Mobiles */
@media (min-width: 280px) and (max-width: 881px) { 
    .contentPostBubble { 
        height: fit-content;
        margin-left: 10%;
        margin-right: 10%;
        background-color: #122443d4;
        color: white;
        border: 4px solid #122443a9;
        border-radius: .3rem;   
        box-shadow: 0px 0px 20px #122443a9;
        height: 100%;
    }
    .contentPostBubble:hover {
        transform: scale(1.05);
        transition: transform 500ms; 
    }
}
</style>