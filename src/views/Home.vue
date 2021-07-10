<template>
  <div class="home">
        <Signup></Signup>

    
  </div>
  
</template>

<script>
// @ is an alias to /src
//import WallOfPosts from '../components/WallOfPosts.vue'
import Signup from '../components/Signup.vue'
//import AdminUserList from '../components/AdminUserList.vue'



export default {
  name: 'Home',
  components: {
    Signup
  }
}


</script>
