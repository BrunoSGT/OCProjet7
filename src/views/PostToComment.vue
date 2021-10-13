<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <a>barre de recherche</a>
    <div class="PostBubbles">
        <ul>
            <li>
                <div class="titlePostBubble" > {{ posts.title }} </div>  
                <div class="contentPostBubble">{{ posts.content }}, {{ posts.updatedAt}} </div>
            </li>
        </ul>
    </div>
    <div class="CommentBubbles">
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
            // showUsers: false
        }
    },
    mounted() {
        axios.get('http://localhost:3000/post/'+ this.$route.params.id//,{headers:{'Authorization': "bearer " + emplacement du token}})
        )
        .then(response =>{
            this.posts = response.data;
            console.log(this.posts)})
        
        .catch(error => { console.error(error)});
    }
    
}
</script>

<style lang="scss" scoped>

.PostBubbles {
    margin-top: 20px;
    margin-right: 25%;
    border-top: solid;
    border-top-color: red;
    border-top-width: 10px;
    border-top-left-radius: 1.5em ;
    border-top-right-radius: 1.5em;  

    border-bottom-style: solid;
    border-bottom-color: red;
    border-bottom-width: 10px;
    border-bottom-left-radius: 1.5em ;
    border-bottom-right-radius: 1.5em;

}

.titlePostBubble {
    background-color: #122443;
    color: white;
    margin-bottom: 10px;
    
    
}
.contentPostBubble  {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    flex-basis: 15px;
    height: fit-content;
    background-color: #122443b5;
    color: white;
    
}



</style>