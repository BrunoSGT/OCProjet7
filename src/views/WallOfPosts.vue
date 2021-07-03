<template>
    <div id="wallOfPosts">
        <h1>Le mur des posts</h1>
    </div>
    <div class="allPostsBubbles">
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
                wallOfPosts: [],
                showPosts: false
            }
        },
        mounted() {
            axios.get('http://localhost:3000/post/'//,{headers:{'Authorization': "bearer " + emplacement du token}})
            )
            .then(response =>{
                this.wallOfPosts = response.data })
            
            .catch(error => { console.error(error)});
        }
    }
</script>

