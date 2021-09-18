<template>
<header>
  <section v-if="admin == 1">
    <AdminNavBar/>
  </section>
  <section v-else-if="admin == 0">
    <div v-if="status == 1">
      <UserConnectedNavBar/>
    </div>    
  </section>
</header>
<main>
  <router-view/>
</main>
<footer>
  <Footer/> 
</footer>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import Footer from "@/components/Footer";
export default{
  name: "App",
  components: {AdminNavBar,UserConnectedNavBar,Footer}, 
  data() {
        return{ 
            admin: "",
            status: ""
        }
   },
   mounted: function(){
     console.log(sessionStorage.getItem('admin'));
     this.admin = sessionStorage.getItem('admin');
     console.log(sessionStorage.getItem('status'));
     this.status = sessionStorage.getItem('status')
   }
}

</script>

<style lang="scss">
body {
  background-color: rgb(86, 116, 128);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background: url(./assets/icon-above-font.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}


</style>



