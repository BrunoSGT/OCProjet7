<template>
  <!-- Si (if) l'utilisateur a les autorisations par défaut, afficher ce qui suit -->
  <div v-if="this.status == 2">
    <AdminNavBar/>
    <div id="accueilAdmin">
      <p> Derniers posts </p>
    </div>
  </div> 
  <div v-else>
    <UserConnectedNavBar/>
  </div>
  <router-view/>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
export default{
  name: "Admin",   //"App"
  components: {AdminNavBar, UserConnectedNavBar},
  data() {
        return{ 
            status: ""
        }
   },
   mounted: function(){
     console.log(sessionStorage.getItem('status'));
     this.status = sessionStorage.getItem('status');
     
   }
}
</script>