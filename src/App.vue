<template>

<main>
  <router-view/>
</main>
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
  background-color: rgb(145, 211, 236);
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



