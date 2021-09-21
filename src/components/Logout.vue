<template>
    <div v-if="this.status == 2">
        <AdminNavBar/>
    </div> 
    <div v-else>
        <UserConnectedNavBar/>
    </div>
    <p>Etes-vous sûr de vouloir vous déconnecter?😟</p>
    <button v-on:click="logout">Se déconnecter</button>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar";
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
import router from '@/router/index'
export default {
    name: 'Logout',
    components: {AdminNavBar,UserConnectedNavBar},
    data() {
        return{ 
            status: ""
            
        }
   },
    methods: {
        logout() {
            sessionStorage.removeItem("admin");
            sessionStorage.removeItem("status");
            sessionStorage.removeItem("user_id");
            sessionStorage.removeItem("token");
            sessionStorage.clear();
            //router.replace("/login")
            router.replace("/home")
        }, 
    },
    mounted: function(){
        this.status = sessionStorage.getItem('status');
   }
}
</script>