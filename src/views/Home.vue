<template>
  <section v-if="this.status == 2">
    <AdminNavBar/>
    <p>Section Administateur</p>
  </section>
  <section v-else-if="this.status == 1">
    <UserConnectedNavBar/>
    <p>Section utilisateurs autorisés</p>
  </section>
  <section v-else>                  
    <div class="home">
      <img class="logoBlack"
      src="../assets/icon-left-font-monochrome-black-redux.png"
      alt="logo noir Groupomania">
      <Login/>
    </div>
    <div class="signupInHome">
      <router-link to="/signup">S'inscrire</router-link>
    </div>
  </section>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import Login from '../components/Login'


export default {
  name: 'Home',
  components: {AdminNavBar, UserConnectedNavBar, Login},
  data() {
    return{ 
      status: ""
    }
  },
  mounted: function(){
    this.status = sessionStorage.getItem('status');
  }
}
</script>

<style lang="scss">

.signupInHome {
  height: 25px;
  background-color: #aeaeae;
  margin-top: 15px;
  font-weight: bold;
}
</style>