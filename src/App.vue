<template>
  <header class="logo">
    <img src="../src/assets/icon-left-font-monochrome-white-redux.png" style="width: 50%; heigth: 50%" alt="logo Groupomania">
  </header>
  <router-view/>
  <Footer/> 
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
    // height: 750px;

}
a {
  text-decoration: none;
}
.logo {
  background-color: #122443;
  color: white;
  font-size: 15px;
  width: 100%;
  padding: 15px;
}



</style>



