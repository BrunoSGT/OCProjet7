<template>
  <nav class="navbar navbar-expand-md navbar-dark bg dark mb-4">
    <div class="container-fluid">
      <div id="nav-brand">Groupomania-Chat'Group</div>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/"><img src="../assets/icon-left-font-monochrome-black-redux.png"  alt="logo Groupomania pour ramener à la page d'accueil">
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/latestPosts">Derniers Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wallofposts">Murs des Posts</router-link>  
          </li> 
          <li class="nav-item">
            <router-link to="/logout">Déconnexion</router-link>  
          </li>            
        </ul>
      </div>  
    </div>
  </nav>    
</template> -->

<script>
export default {
  name: 'UserConnectedNavBar'
}
</script>

<style lang="scss">

</style>