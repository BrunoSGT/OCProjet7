<template>
  <nav class="navbar navbar-expand-md navbar-dark bg dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Home</a>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item-login">
     <!--       <a class="nav-link" aria-current="page" href="#">Login</a>  -->
            <router-link to="/login">Login</router-link> 
          </li>
          <li class="nav-item-signup">
     <!--       <a class="nav-link" aria-current="page" href="#">Signup</a>  -->
            <router-link to="/signup">Signup</router-link> 
          </li>
          <li class="nav-item-about">
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

<style lang="scss" scoped>

</style>