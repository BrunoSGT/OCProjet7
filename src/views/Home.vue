<template>
  <section v-if="status == 2">
    <p>Section Administateur</p>
  </section>
  <section v-else-if="status == 1">
    <UserConnectedNavBar/>
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
import UserConnectedNavBar from "@/components/UserConnectedNavBar";


export default {
  name: 'Home',
  components: {Login, UserConnectedNavBar}
}
</script>

<style lang="scss">

</style>