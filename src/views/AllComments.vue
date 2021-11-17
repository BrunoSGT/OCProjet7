
<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <div class="PostsBubbles">
        <ul>
            <li>
                <div class="titlePostBubble" > {{ posts.title }} </div>  
                <div class="contentPostBubble">
                    <!-- <div><img v-bind:src="posts.user.imageUrl" class="photoProfil"/></div> -->
                    <div>{{ posts.content }} <br/><br/> <p>post n° {{ posts.id }}</p> <br/> {{ posts.updatedAt}}</div> 
                </div>
            </li>
        </ul>
        
    </div>
    <div class="allCommentsBubbles">
        <ul>
            <li class="commentContainer" v-for="comment in allComments" :key="comment">
                <div class="titleCommentBubble" > {{ comment.title }} </div>  
                <div class="contentCommentBubble"> 
                    <!-- <div><img v-bind:src="user.imageUrl" class="photoProfil"/></div> -->
                    <div>{{ comment.content }} <br/><br/> {{ comment.updatedAt}}</div>
                </div>
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
            users: [],
            posts: [],
            allComments: [],
        }
    },
    mounted() {
        const token= sessionStorage.getItem('token'); //jeton
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
    text-align: center;
    background-color: #122443d4;
    color: white;
    padding: 20px;
    display: block;
    word-wrap: break-word;
    border-bottom-left-radius: 15px; 
    border-bottom-right-radius: 15px;
}
.photoProfil {
    margin-top: 5px;
    width: 30px;
    border-radius: 50%;
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
    background-color: #122443d4;
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