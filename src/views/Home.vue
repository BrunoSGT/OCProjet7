<template>
  <div class="home">
        <Signup></Signup>
        <Login></Login>
    
  </div>
  
</template>

<script>
// @ is an alias to /src
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'



export default {
  name: 'Home',
  components: {
    Signup,
    Login
  }
}


</script>
