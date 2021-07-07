<template>
  <Nav/>
  <h1>Chat'Group'</h1>
  <div id="users-view">
    <!-- <router-link to="/admin">AdminUserList</router-link> -->
    <router-link to="/user">Users</router-link> 
  </div>
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


