<template>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/icon-above-font-16-9.png">
    <Signup></Signup>

    
  </div>
  <WallOfPosts></WallOfPosts>
</template>

<script>
// @ is an alias to /src
import WallOfPosts from '../components/WallOfPosts.vue'
import Signup from '../components/Signup.vue'
//import AdminUserList from '../components/AdminUserList.vue'



export default {
  name: 'Home',
  components: {
    WallOfPosts,
    Signup
  }
}


</script>
