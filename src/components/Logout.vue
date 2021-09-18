<template>
    <p>Etes-vous sûr de vouloir vous déconnecter?😟</p>
    <button v-on:click="logout">Se déconnecter</button>
</template>

<script>
import router from '@/router/index'
export default {
    name: 'Logout',
    methods: {
        logout() {
            sessionStorage.removeItem("admin");
            sessionStorage.removeItem("status");
            sessionStorage.removeItem("user_id");
            sessionStorage.removeItem("token");
            sessionStorage.clear();
            router.replace("/login")
        }, 
    }
}
</script>