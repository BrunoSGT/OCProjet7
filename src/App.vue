<template>
  <Nav/>
      <router-link to="/post">Nouveau post</router-link>

  <!-- <router-link to="/latestposts">Latest posts</router-link> -->
  <!-- <div id="users-view"> -->
    <!-- <router-link to="/admin">AdminUserList</router-link> -->
    <!-- <router-link to="/user">Users</router-link>  -->
  <!-- </div> -->
  <div id="posts-view">
    <router-link to="/wallofposts">Wall of posts</router-link>
  </div>
  <router-view/>
</template>

<script>
import Nav from "@/components/Nav";
//import { mapState } from 'vuex';
export default{
  name: "App",
  components: {Nav}
  // computed: {
  // ...mapState([ 'currentUser' ])
  // }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(./assets/icon-above-font.png);
  background-size: cover;
  background-repeat: no-repeat;
  
}


</style>


