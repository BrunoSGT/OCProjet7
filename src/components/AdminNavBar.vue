<template>
  <nav class="navbar navbar-expand-md navbar-dark bg dark mb-4">
    <div class="container-fluid">
      <div id="nav-brand">Groupomania-Chat'Group</div>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>  
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>  
          </li> 
          <li class="nav-item">
            <router-link to="/wallofposts">Wall of Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allcomments/">Comments</router-link>  
          </li>            
        </ul>
      </div>  
    </div>
  </nav>  
</template>

<script>
export default {
    name: "AdminNavBar"
}
</script>

<style> 
#nav-brand {
    font-size: 20px;
}
.navbar-nav { 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #7cc7c1;
}
.nav-item {
    margin-right: 2em;
    text-transform: uppercase;
    font-weight: 600;
}  
.nav-item:first-child {
    margin-right: auto;
    margin-left: 2em;
}  
</style>