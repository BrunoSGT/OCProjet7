<template>
  <AdminNavBar/>
  <!-- ajout du 17/07 -->
    <!-- <div id="derniersPosts">
      <router-link to="/latestposts">Latest posts</router-link>
    </div> -->
  <!-- <div id="users-view"> -->
  
  <div id="admin-views">

    <router-link to="/admin">AdminUsersList</router-link> |
    <router-link to="/user">Users</router-link>
  </div>
    <!-- <router-link to="/user">Users</router-link>  -->
  <!-- </div> -->
  <router-view/>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar"

export default{
  name: "Admin",
  components: {AdminNavBar}
  
}

</script>