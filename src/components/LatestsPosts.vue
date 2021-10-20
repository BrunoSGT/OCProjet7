<!--Les 4 derniers Posts visibles par les utilisateurs autorisés-->
<template>
    <UserConnectedNavBar/>
    <h1>Derniers posts</h1>
    <div class="LatestPostsBubbles">
        <ul>
            <li class="postsContainer" v-for="post in wallOfPosts" :key="post">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} </div>  
                <div class="contentPostBubble">{{ post.content }}, {{ post.updatedAt}} </div>
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
            wallOfPosts: [],
            showPosts: false //true 
        }
    },
        
    mounted() {
        const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
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

</style>