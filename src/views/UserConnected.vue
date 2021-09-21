<template>
  <section v-if="admin == 0">
    <div v-if="status == 1">
      <UserConnectedNavBar/>
    </div>    
  </section>
 
  <div class="userConnectedNavBar">
    <img class="logoBlack"
    src="../assets/icon-left-font-monochrome-black-redux.png"
    alt="logo noir Groupomania">
  </div>
  <!-- barre de recherche -->
  <div class="latestsPosts">
    <LatestsPosts/>
  </div>
  <div class="allPosts">
    <WallOfPosts/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import LatestsPosts from './LatestsPosts.vue'
import WallOfPosts from './WallOfPosts.vue'
export default {
  name: 'UserConnectedNavBar',
  components: {
    UserConnectedNavBar,LatestPosts,WallOfPosts
  
  }
}
</script>

<style lang="scss">

</style>