<template>
  <Nav/>
  <!-- ajout du 17/07 -->
    <!-- <div id="derniersPosts">
      <router-link to="/latestposts">Latest posts</router-link>
    </div> -->
  <!-- <div id="users-view"> -->
    <!-- <router-link to="/admin">AdminUserList</router-link> -->
    <!-- <router-link to="/user">Users</router-link>  -->
  <!-- </div> -->
  <router-view/>
</template>

<script>
import Nav from "@/components/Nav";
export default{
  name: "App",
  components: {Nav}
  
}

</script>

<style lang="scss">
body {
  background-color: rgb(86, 116, 128);
}
#app {
  height: 750px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(./assets/icon.png);
  background-size: cover;
  background-repeat: no-repeat;
  
}


</style>


