<template>
    <a>barre de recherche</a>
    <div class="allPostsBubbles">
        <ul>
            <li v-for="post in allPosts" :key="post">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} 
                </div>  
                <div class="contentPostBubble">{{ post.content }}, {{ post.id }}, {{ username}},{{ post.updatedAt}} 
                </div>
                <div class="setPostVisible">
                    <input type="checkbox" :id="'checkPost_'+String (post.id)" v-model=post.visible>
                    <label :for="'checkPost_'+String (post.id)">Post visible</label>
                </div>
            </li>
        </ul>
        
    </div>
<!-- </section>    -->

</template>

<script>
    import axios from "axios"
    export default {
        name: 'allPosts',
        data() {
            return {
                allPosts: [],
                showPosts: false
            }
        },
        mounted() {
            const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
            axios.get('http://localhost:3000/post/',{headers:{'Authorization': "bearer " + token}})
            
            .then(response =>{
                this.allPosts = response.data })
            
            .catch(error => { console.error(error)});
        }
    }
</script>
