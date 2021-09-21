<template>
    <div id="derniersPosts">
      <router-link to="/latestsposts">Latest posts</router-link>
    </div>
    <div id="Post">
        <h1>Nouveau post</h1>
        <Post/>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
//import axios from 'axios'
// const token= JSON.parse(sessionStorage.getItem('data')); //jeton  --> ajout 10/07
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
<style lang="scss" scoped>
#derniersPosts {
    
    background: #4fdace;
}
</style>
