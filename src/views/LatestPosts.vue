<template>
    <div class="LatestPostsBubbles">
        <ul>
            <li v-for="post in wallOfPosts" :key="post">
                <a v-bind:href="post.url"> {{ post.title }} </a> : {{ post.content }}, {{ post.updatedAt}}
            </li>
        </ul>
    </div>
    <button @click="showPosts">Afficher tous les posts</button>
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
