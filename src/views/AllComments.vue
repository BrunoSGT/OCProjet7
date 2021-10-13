
<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <a>barre de recherche</a>
    <div class="PostsBubbles">
        <ul>
            <li>
                <div class="titlePostBubble" > {{ posts.title }} </div>  
                <div class="contentPostBubble">{{ posts.content }}, {{ posts.updatedAt}} </div>
            </li>
        </ul>
        
    </div>
    <div class="allCommentsBubbles">
        <ul>
            <li v-for="comment in allComments" :key="comment">  comment.visible ou presque
                <div class="titleCommentBubble" > {{ comment.title }} </div>  
                <div class="contentCommentBubble"> {{ comment.content }}, {{ comment.updatedAt}} </div>
            </li>
        </ul>
    </div> 
</template>

<script>
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import axios from "axios"
export default {
    name: 'AllComments',
    components: {UserConnectedNavBar},
    data() {
        return {
            posts: [],
            allComments: [],
        }
    },
    mounted() {
        axios.get('http://localhost:3000/post/'+ this.$route.params.id//,{headers:{'Authorization': "bearer " + token}})
        )
        .then(response =>{
            // console.log(this.posts)
            this.posts = response.data})
            
        .catch(error => { console.error(error)});

        // récupère le commantaires liés à un post
        axios.get('http://localhost:3000/comment/allCommentsForOnePost/'+this.$route.params.id//,{headers:{'Authorization': "bearer " + token}})
        )
        .then(response =>{
            this.allComments = response.data;
            console.log(this.allComments)  
            this.visible = response.data.visible})
        .catch(error => { console.error(error)});
    } 
}
</script>  

