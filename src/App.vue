<template>
  <Nav/>
  
  
  <router-view/>
</template>

<script>
import Nav from "@/components/Nav";
export default{
  name: "App",
  components: {Nav}
  
}

</script>

<style lang="scss">
body {
  background-color: rgb(86, 116, 128);
}
#app {
  height: 750px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(./assets/icon-above-font.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}


</style>



