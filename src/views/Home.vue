<template>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/icon-above-font-16-9.png">
    <Signup></Signup>

    <HelloWorld msg="Welcome to Your Vue.js App"/> 
  </div>
  <PostsBubble></PostsBubble>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import PostsBubble from '../components/PostsBubble.vue'
import Signup from '../components/Signup.vue'
// import Login from '../components/Login.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    //PostsBubble,
    Signup
    //Login
  }
}


</script>
