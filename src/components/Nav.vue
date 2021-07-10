<template>
  <nav class="navbar navbar-expand-md navbar-dark bg dark mb-4">
    <div class="container-fluid">
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>  
          </li>      
          <li class="nav-item">
            <router-link to="/login">Login</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/signup">Signup</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>  
          </li>      
        </ul>
      </div>  
    </div>
  </nav>  
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style> 
.navbar-nav { 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgb(51, 255, 0)
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