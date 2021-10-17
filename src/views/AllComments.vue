
<template>
    <div>
        <UserConnectedNavBar/>
    </div>
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
            <li class="commentContainer" v-for="comment in allComments" :key="comment">
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
        const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
        axios.get('http://localhost:3000/post/'+ this.$route.params.id,{headers:{'Authorization': "bearer " + token}}
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

<style lang="scss" scoped >
.PostsBubbles ul {
    margin-right: 2em;
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
.allCommentsBubbles ul {
    list-style-type: none;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}
.allCommentsBubbles li {
    margin-bottom: 20px;
}
.commentContainer {
    opacity: 0.8;
}
.titleCommentBubble {
    background-color: #122443;
    color: white;
    padding: 10px;
    border-top-left-radius: 15px; 
    border-top-right-radius: 15px;
}
.contentCommentBubble {
    background-color: #122443b5;
    color: white;
    padding: 20px;
    display: block;
    text-align: left;
    word-wrap: break-word;
    border-bottom-left-radius: 15px; 
    border-bottom-right-radius: 15px;
}
.setCommentVisible {
    color: black;
    margin-top: 10px;
    margin-bottom: 25px;
}
</style>