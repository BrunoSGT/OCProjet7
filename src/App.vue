<template>
  <div class="zoneContainer">
    <div class="topZone">
      <header class="logo">
        <img src="../src/assets/icon-left-font-monochrome-white-redux.png" style="width: 50%; heigth: 50%" alt="logo Groupomania">
      </header>
    </div>
    <div class="scrollZone" id="scrollZone">
      <router-view/>
    </div>
    <div class="bottomZone">
      <footer>
        <Footer/> 
      </footer>
    </div>
  </div>
  <button onclick="document.getElementById('scrollZone').scrollTop = 0 " class="goToTop">Up</button>
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
.zoneContainer {
  display: flex;
  flex-direction: column;
  position: absolute;
  // width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: calc(100% - 2px);
}
.scrollZone {
  flex: 1;
  overflow: auto;
}
.goToTop {
  cursor: pointer;
  position: absolute;
  bottom: 67px;
  right: 34px;
  background-color: #122443;
  color: white;
  padding: 8px;
  border-radius: 7px;
  opacity: 0.6;
  border: 2px solid black;
}
.goToTop:hover {
  opacity: 0.8;
}
</style>



