
<template>
<section v-if="this.status == 2">
    <AdminNavBar/>
    <p>Section Administateur</p>
  </section>
  <section v-else-if="this.status == 1">
    <UserConnectedNavBar/>
    <p>Section utilisateurs autorisés</p>
  </section>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="mentionsLegales">Mentions Légales
  </div> 
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
export default {
  name: 'About',
  components: {AdminNavBar, UserConnectedNavBar},
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