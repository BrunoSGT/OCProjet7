<template>
  
 
  <div class="userConnectedNavBar">
    <img class="logoBlack"
    src="../assets/icon-left-font-monochrome-black-redux.png"
    alt="logo noir Groupomania">
  </div>
  <!-- barre de recherche -->
  <div class="latestPosts">
    <LatestPosts/>
  </div>
  <div class="allPosts">
    <WallOfPosts/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import LatestPosts from './LatestPosts.vue'
import WallOfPosts from './WallOfPosts.vue'
export default {
  name: 'UserConnectedNavBar',
  components: {
    LatestPosts,WallOfPosts
  
  }
}
</script>

<style lang="scss">

</style>