<template>
    <div id="Post">
        <h1>Les posts</h1>
    </div>
    <div class="PostsBubbles">
        <ul>
            <li v-for="post in wallOfPosts" :key="post">
                <a v-bind:href="post.url"> {{ post.title }} </a> : {{ post.content }}
            </li>
        </ul>
    </div>
    <button @click="showPosts">Afficher tous les posts</button>
    <!-- <div v-show="showPosts" class="postItems"></div> -->
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                Posts: [],
                showPosts: false
            }
        },
        mounted() {
            axios.post('http://localhost:3000/post/'//,{headers:{'Authorization': "bearer " + emplacement du token}})
            )
            .then(response =>{
                this.Posts = response.data })
            
            .catch(error => { console.error(error)});
        }
    }
</script>

