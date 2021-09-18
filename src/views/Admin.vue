<template>
  <!-- Si (if) l'utilisateur a les autorisations par défaut, afficher ce qui suit -->
  <section v-if="admin == 2">
    <AdminNavBar/>
  </section> 
  <router-view/>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
export default{
  name: "App",
  components: {AdminNavBar},
  data() {
        return{ 
            admin: ""
            
        }
   },
   mounted: function(){
     console.log(sessionStorage.getItem('admin'));
     this.admin = sessionStorage.getItem('admin');
     
   }
}
</script>