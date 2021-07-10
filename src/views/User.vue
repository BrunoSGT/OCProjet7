
<template>
	<div id="app">
        
		<!-- Si (if) l'utilisateur a les autorisations par défaut, afficher ce qui suit -->
<!--		<section v-if="userPermission === 'default'">
			<h1>Bienvenue {{ $route.params.name }}</h1>
		</section>    -->
		<!-- Sinon et si l'utilisateur a les autorisations administrateur, afficher ce qui suit -->
<!--		<section v-else-if="userPermission === 'admin'">
			<h1>Bienvenue administrateur {{ $route.params.name }}</h1>
		</section>     -->
		<!-- Si l'utilisateur n'a aucune autorisation afficher ce qui suit -->
<!--		<section v-else>
			<h1>Connexion non autorisée</h1>
		</section>     -->
	</div>
	<!-- ajout du 03/07 -->
	<div class="allUsers">
        <ul>
            <li v-for="user in allUsers" :key="user">
                <a v-bind:href="user.url"> {{ user.firstName }} </a> : {{ user.lastName }}, {{ user._id  }} 
            </li>
        </ul>
    </div>
   
</template>

<script>
    import axios from "axios"
    const token= JSON.parse(sessionStorage.getItem('data')); //jeton
    export default {
        data() {
            return {
                allUsers: [],
                showUsers: false
            }
        },
        mounted() {
            axios.get('http://localhost:3000/user/',{headers:{'Authorization': "Bearer " + token}})
            
            .then(response =>{
                this.allUsers = response.data })
            
            .catch(error => { console.error(error)});
        }
    }
</script>