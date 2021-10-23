<template>
  <nav class="navbar navbar-expand-md navbar-dark bg dark mb-4">
    <div class="container-fluid">
      <div id="nav-brand">Groupomania-Chat'Group</div>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item__logo">
            <router-link to="/"><img src="../assets/icon-left-font-monochrome-black-redux.png"
                alt="logo Groupomania pour ramener à la page d'accueil">
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allusers">Tous les Utilisateurs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allposts">Tous les Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/allcommentsbypost">Tous les commentaires</router-link> <!-- '/allcomments/' + post.id  -->
          </li>
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
        wallOfPosts: [],
        showPosts: false
      }
    },
    mounted() {
      const token= JSON.stringify(sessionStorage.getItem('token')); //jeton
      this.status = sessionStorage.getItem('status');
      axios.get(
          'http://localhost:3000/post/wallOfPosts' ,{headers:{'Authorization': "bearer " + token}}
        )
        .then(response => {
          this.wallOfPosts = response.data;
          this.status = response.data.status
        })
        .catch(error => {
          console.error(error)
        });
    },
  }
</script>

<style>
  #nav-brand {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

.navbar-nav{
  padding: 15px;
  margin-bottom: 2em;
}
  .nav-item {
    margin-right: 2em;
    text-transform: uppercase;
    font-weight: 600;
  } 

  .nav-item__logo {
    margin-right: auto;
    margin-left: 2em;
  }

/* Ecrans Tablettes */

@media (min-width: 882px) and (max-width: 1023px) {  
  .nav-item {
      padding: 0.5em;
      margin-left: 2em;
    }
}
  /* Ecrans Mobiles */
  @media (min-width: 280px) and (max-width: 881px) { 
    .navbar-nav {
      flex-direction: column;
      font-size: small;
    }
    .nav-item {
      padding: 0.5em;
      margin-left: 2em;
    }
    .nav-item__logo {
      margin-left: auto;
    }
    #allUsers {
      margin-right: 50px;
    }
  }
</style>