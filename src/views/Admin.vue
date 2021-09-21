<template>
  <!-- Si (if) l'utilisateur a les autorisations par défaut, afficher ce qui suit -->
  <div v-if="this.status == 2">
    <AdminNavBar/>
    <div id="accueilAdmin">
      <LatestsPosts/>
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
import LatestsPosts from "@/components/LatestsPosts"
export default{
  name: "App",
  components: {AdminNavBar,UserConnectedNavBar,LatestsPosts},
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