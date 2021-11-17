<template>
	<div class="signup">
		<Signup></Signup>
	</div>
</template>
<script>
// @ is an alias to /src

import Signup from '../components/Signup.vue'

export default {
  name: 'Home',
  components: {
    Signup
  }
}
</script>

<style lang="scss" scoped>
.signup {
    padding-top: 0.5em;
}
</style>
