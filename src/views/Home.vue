<template>
  <section v-if="status == 2">
    <p>Section Administateur</p>
  </section>
  <section v-else-if="status == 1">
    <router-link to="/UserConnectedNavBar.vue">Espace Utilisateur</router-link>
  </section>
  <section v-else>                  
    <div class="home">
      <img class="logoBlack"
      src="../assets/icon-left-font-monochrome-black-redux.png"
      alt="logo noir Groupomania">
      <Login></Login>
    </div>
  </section>
</template>

<script>
import Login from '../components/Login.vue'



export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

<style lang="scss">

</style>