
<template>
	<div id="app">
		<!-- Si (if) l'utilisateur a les autorisations par défaut, afficher ce qui suit -->
		<section v-if="userPermission === 'default'">
			<h1>Bienvenue {{ $route.params.name }}</h1>
		</section>
		<!-- Sinon et si l'utilisateur a les autorisations administrateur, afficher ce qui suit -->
		<section v-else-if="userPermission === 'admin'">
			<h1>Bienvenue {{ $route.params.name }}</h1>
		</section>
		<!-- Si l'utilisateur n'a aucune autorisation afficher ce qui suit -->
		<section v-else>
			<h1>Connexion non autorisée</h1>
		</section>
	</div>
   
</template>