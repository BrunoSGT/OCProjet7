<template>
    <AdminNavBar/>
    <a>barre de recherche</a>
    <div class="containerAll" v-for="post in posts" :key="post" >

        <div class="PostsBubbles">
            <ul>
                <li>
                    <div class="titlePostBubble" > {{ post.title }} </div>  
                    <div class="contentPostBubble">{{ post.content }}, {{ post.updatedAt}} </div>
                </li>
            </ul>
            
        </div>
        <div class="allCommentsBubbles">
            <ul>
                <li class="commentContainer" v-for="comment in allComments" :key="comment" >
                    <div v-if="comment.postId === post.id">
                        <div class="titleCommentBubble" v-bind:href="comment.url"> {{ comment.title }} </div>  
                        <div class="contentCommentBubble"> {{ comment.content }}, {{ comment.updatedAt}} </div>
                        <div class="setCommentVisible">
                            <input type="checkbox" :id="'checkComment_'+String (comment.id)"  v-model=comment.visible
                            @click="submit(comment.id, comment.visible)">
                            <label :for="'checkComment_'+String (comment.id)">{{comment.visible}}Comment visible</label>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div> 
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import axios from "axios"
export default {
    name: 'AllCommentsByPost',
    components: {AdminNavBar},
    data() {
        return {
            posts: [],
            allComments: [],
        }
    },
    mounted() {
        axios.get('http://localhost:3000/post'//,{headers:{'Authorization': "bearer " + token}}
        )
        .then(response =>{
            console.log(this.posts)
            this.posts = response.data})
            
        .catch(error => { console.error(error)});

        // récupèrer tous les commentaires 
        axios.get('http://localhost:3000/comment'//,{headers:{'Authorization': "bearer " + token}}
        )
        .then(response =>{
            console.log(this.allComments)
            this.allComments = response.data;})
              
        .catch(error => { console.error(error)});
    },
    methods: {
        submit(id, commentVisibility){ 
            axios.put('http://localhost:3000/comment/'+id,
            {
                visible: commentVisibility ? 0:1 
            })
            
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            
            });
            console.log(event.target.id)
            console.log(event.target.checked)
            console.log(event.target.id.substring(10))
        }
    }                
}
</script>  

<style scoped lang="scss">
.allCommentsBubbles ul {
    list-style-type: none;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
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