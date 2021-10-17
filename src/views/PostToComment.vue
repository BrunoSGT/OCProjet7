<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <div class="PostBubbles">
        <ul>
            <li>
                <div class="titlePostBubble" > {{ posts.title }} </div>  
                <div class="contentPostBubble">{{ posts.content }}, {{ posts.updatedAt}} </div>
            </li>
        </ul>
    </div>
    <p>Ajoutez un commentaire ! 😄</p>
    <div class="commentBubbles">
        <Comment/>
    </div>
</template>

<script>
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import Comment from '../components/Comment.vue'
import axios from 'axios'

export default {
    name: 'PostToComment',
    components: {UserConnectedNavBar, Comment},
    data() {
        return {
            posts: [],
            showPosts: false,
            comments: []
        }
    },
    mounted() {
        const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
        axios.get('http://localhost:3000/post/'+ this.$route.params.id, {headers:{'Authorization': "bearer " + token}}
        )
        .then(response =>{
            this.posts = response.data;
            console.log(this.posts)})
        
        .catch(error => { console.error(error)});
    }
    
}
</script>

<style lang="scss" scoped>

.PostBubbles li {
    margin-top: 25px;
    margin-right: 25%;
    margin-bottom: 20px;
    margin-left: 5%;
    opacity: 0.8;
}
.titlePostBubble {
    background-color: #122443;
    color: white;
    padding: 10px;
    border-top-left-radius: 15px; 
    border-top-right-radius: 15px;
}
.contentPostBubble  {
    background-color: #122443b5;
    color: white;
    padding: 20px;
    display: block;
    text-align: left;
    word-wrap: break-word;
    border-bottom-left-radius: 15px; 
    border-bottom-right-radius: 15px;
    
}



</style>