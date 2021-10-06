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
            <router-link to="/post">nouveau Post</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/latestsposts">Derniers Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wallofposts">Murs des Posts</router-link>  
          </li> 
          <li class="nav-item">
            <router-link to="/userprofile">Mon Profil</router-link>  
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

<style>
#nav-brand {
  font-size: 20px;
  color: #122443;
}
.navbar-nav { 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #d1515a9c;
  color: #122443;
}
.nav-item {
  margin-right: 2em;
  text-transform: uppercase;
  font-weight: 600;
  color: #122443;
}  
.nav-item:first-child {
  margin-right: auto;
  margin-left: 2em;
}  
</style>