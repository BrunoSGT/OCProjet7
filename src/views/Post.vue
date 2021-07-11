<template>
    <div id="Post">
        <h1>Les posts</h1>
        <Post/>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
import axios from 'axios'
const token= JSON.parse(sessionStorage.getItem('data')); //jeton  --> ajout 10/07
export default {
  name: 'Home',
  components: {
    Post
  },

// ajout du 10/07

        data() {
            return {
                posts: []
               // showUsers: false
            }
        },
        mounted() {
            axios.post('http://localhost:3000/api/post/', {headers:{'Authorization': "Bearer " + token}})
            
            .then(response =>{
                this.post = response.data })
            
            .catch(error => { console.error(error)});
        }
    }
</script>
<!--   <script>
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
    </script> -->

