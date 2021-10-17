<template>
  <header class="logo">
    <img src="../src/assets/icon-left-font-monochrome-white-redux.png" style="width: 50%; heigth: 50%" alt="logo Groupomania">
  </header>
  <router-view/>
  <footer>
    <Footer/> 
  </footer>
</template>

<script>
import Footer from "@/components/Footer";
export default{
  name: "App",
  components: {Footer},
}

</script>

<style lang="scss">
body {
  background-image: url("../src/assets/Tour_Eiffel_sepia.jpeg");
  background-attachment:fixed;
  font-family: system-ui, system-ui, sans-serif;
  background-color: #E6E6E6;
  color: #101010;
  text-align: center;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
a:hover {
  color: #800000;
  text-decoration: underline;
}
.logo {
  // position: fixed;
  background-color: #122443;
  color: white;
  font-size: 15px;
  padding: 15px;
}
</style>



