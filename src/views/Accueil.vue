<template>
  <!-- Si (if) l'utilisateur a les autorisations par défaut, afficher ce qui suit -->
  <div v-if="this.status == 2">
    <AdminNavBar/>
    <div id="accueilAdmin">
      <p> Espace administrateur </p>
    </div>
  </div> 
  <div v-else>
    <LatestsPosts/>
  </div>
  <router-view/>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import LatestsPosts from "@/components/LatestsPosts";
export default{
  name: "Accueil",   //"App"
  components: {AdminNavBar, LatestsPosts},
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