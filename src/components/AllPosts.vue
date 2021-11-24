<template>
    <div>
        <AdminNavBar/>   
    </div> 
    <div class="allPostsBubbles">
        <ul>
            <li class="postContainer" v-for="post in allPosts" :key="post">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} 
                </div>  
                <div class="contentPostBubble">{{ post.content }}, {{ post.id }}, {{ post.username }},{{ post.updatedAt }} 
                </div>
                <div class="setPostVisible">
                    <input type="checkbox" :id="'checkPost_'+String (post.id)"  v-model=post.visible
                    @click="submit(post.id, post.visible)">
                    <label :for="'checkPost_'+String (post.id)">Post visible</label>

                </div>
            </li>
        </ul>
        
    </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import axios from "axios"
export default {
    name: 'AllPosts',
    components: {AdminNavBar},
    data() {
        return {
            allPosts: [],
            visible: "" 
        }
    },
    mounted() {
        const token= sessionStorage.getItem('token'); //jeton
        console.log(token)
        axios.get('http://localhost:3000/post/',{headers:{'Authorization': "bearer " + token}})
        .then(response =>{
            this.allPosts = response.data; 
            console.log(response) })
        .catch(error => { console.error(error)});
    },
    methods: {
        submit(id, postVisibility){ 
            const token= sessionStorage.getItem('token'); //jeton     
            const visible = {
                'visible': postVisibility ? 0:1 
            }
            axios.put('http://localhost:3000/post/'+id,visible,{headers:{'Authorization': "Bearer " + token}})
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
.allPostsBubbles ul {
    list-style-type: none;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
}
.titlePostBubble {
   background-color: #122443;
    color: white;
    padding: 10px;
    border-top-left-radius: 15px; 
    border-top-right-radius: 15px;
}
.contentPostBubble {
  background-color: #122443d4;
    color: white;
    padding: 20px;
    display: block;
    text-align: left;
    word-wrap: break-word;
    border-bottom-left-radius: 15px; 
    border-bottom-right-radius: 15px;
}
.setPostVisible {
    color: black;
    margin-top: 10px;
    margin-bottom: 25px;
}
.postContainer {
    opacity: 0.8;
}
</style>