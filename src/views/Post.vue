<template>
    <div>
        <UserConnectedNavBar/>
    </div>
    <div id="Post">
        <h1>Nouveau post</h1>
        <Post/>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
import UserConnectedNavBar from "@/components/UserConnectedNavBar";
export default {
    name: 'Home',
    components: {UserConnectedNavBar,
    Post
    },
    data() {
        return {
            posts: []
        }
    },
}
</script>
<style lang="scss" scoped>


</style>
