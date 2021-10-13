<!--Les 4 derniers Posts visibles par les utilisateurs autorisés-->
<template>
    <UserConnectedNavBar/>
    <div class="LatestPostsBubbles">
        <ul>
            <li v-for="post in wallOfPosts" :key="post">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} </div>  
                <div class="contentPostBubble">{{ post.content }}, {{ post.updatedAt}} </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
import UserConnectedNavBar from "./UserConnectedNavBar.vue"
export default {
    components: {UserConnectedNavBar},
    data() {
        //if(post.updatedAt < post[updatedAt].length){
        //    return wallOfPosts < 5
        //}
                
    return {
            wallOfPosts: [],
            showPosts: false //true 
        }
    },
        
    mounted() {
        axios.get('http://localhost:3000/post/latestsposts')//,{headers:{'Authorization': "bearer " + emplacement du token}})
        
        .then(response =>{
            this.wallOfPosts = response.data })
        
        .catch(error => { console.error(error)});
    }
}
</script>

<style lang="scss" scoped>
.LatestPostsBubbles {
    text-align: center;
    // display: grid;
    // grid-template-columns: 66vw 33vw;
    // grid-template-rows: repeat (auto-fit, 10vh);
    // grid-column-gap: 2vw;
    // grid-row-gap: 11vh;
}
li {
    margin-bottom: 10px;
    margin-left: 2em;
}
.titlePostBubble {
    width: 50%;
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #122443a9;
    border-radius: .3rem;
    box-shadow: 0px 0px 20px #122443a9;
    background-color: #122443;
    color: white;
}
.contentPostBubble { 
    height: fit-content;
    margin-left: 25%;
    background-color: #122443a9;
    color: white;
    border: 4px solid #122443a9;
    border-radius: .3rem;   
    box-shadow: 0px 0px 20px #122443a9;
    height: 100%;
}

.contentPostBubble:hover {
    transform: scale(1.1);
    transition: transform 500ms; 
}

</style>






<!--<template>
    <div id="TeasersOfPosts"> 
        <h1>Le mur des posts</h1>
    </div>
    <div class="allPostsBubbles">
        <ul>
            <li v-for="post in wallOfPosts" :key="post.id">
                
                <a v-bind:href="post.url"> {{ post.title }} </a> : {{ post.content }}, {{ post.id }}, {{ post.updatedAt }}

            </li>
        </ul>
    </div>
    <button @click="showPosts">Afficher tous les posts</button>
</template>
// <script>
// export default {
//     name: 'TeasersOfPosts',
//     props: {
//         msg: String
//     }
// }
// //    for (let i = 0; i < colors.length; i++) 
// let LatestPostsBubbles = post.id
// for (let i = 0; i < id.length; i++ < 5 )

// </script> -->