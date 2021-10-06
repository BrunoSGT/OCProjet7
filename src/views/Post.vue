<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <div id="Post">
        <h1>Nouveau post</h1>
        <Post/>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
import UserConnectedNavBar from "@/components/UserConnectedNavBar";

//import axios from 'axios'
// const token= JSON.parse(sessionStorage.getItem('data')); //jeton  --> ajout 10/07
export default {
  name: 'Home',
  components: {UserConnectedNavBar,
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
<style lang="scss" scoped>


</style>
