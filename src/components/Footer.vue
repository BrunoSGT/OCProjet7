<template v-if="sessionStorage.admin = true">
  <div class="container-fluid">
    <ul class="footerbar-nav">
      <li class="footer-item">
        <router-link to="/"><img src="../assets/icon-left-font-monochrome-black-redux.png"  alt="logo Groupomania pour ramener à la page d'accueil"></router-link>
      </li>  
      <li class="footer-item">
        <router-link to="/about">About</router-link>  
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style> 

ul {
    list-style-type: none;
    margin-top: 0;
}

.container-fluid {
  display: block;
}
.footerbar-nav { 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #d1515a52;
  padding: 15px;
  margin-block-end: 0;
}
.footer-item {
  margin-right: 2em;
  text-transform: uppercase;
  font-weight: 600;
}  

</style>