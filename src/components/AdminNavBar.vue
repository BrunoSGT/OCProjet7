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
            <router-link to="/allusers">Tous les Utilisateurs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allposts">Tous les Posts</router-link>  
          </li> 
          <!-- <li class="nav-item">
            <router-link to="/allcommentsvalidated">Tous les Commentaires</router-link>  
          </li>   
          <li class="nav-item">
            <router-link to="/allcomments">Tous les commentaires</router-link>--> <!-- '/allcomments/' + post.id  
          </li>-->
          <li class="nav-item">
            <router-link to="/logout">Déconnexion</router-link>  
          </li>            
        </ul>
      </div>  
    </div>
  </nav>  
</template>

<script>
import axios from "axios"
export default {
    name: "AdminNavBar",
    data() {
      return {
          status: "",
          // visible: true,
          wallOfPosts: [],
          showPosts: false
      }
    },
    mounted() {
      this.status = sessionStorage.getItem('status');
      axios.get('http://localhost:3000/post/wallOfPosts'//,{headers:{'Authorization': "bearer " + emplacement du token}})
      )
      .then(response =>{
          this.wallOfPosts = response.data;
          this.status = response.data.status})
      .catch(error => { console.error(error)});
    },
}
</script>

<style> 
#nav-brand {
    font-size: 20px;
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
/* Ecrans Mobiles */
/* @media (min-width: 280px) and (max-width: 567px) {
  footer {
    height: 100px;
  }

  .nav-bar {
    flex-direction: column;
    font-size: smaller;
  } */
</style>