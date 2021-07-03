
<template>
	<div class="login">
		<h1>Voici la page login</h1>
        <Login></Login>
	</div>
</template>
<script>
// @ is an alias to /src
import Login from '../components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
