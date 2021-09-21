<!--<template>
    <div class="LatestPostsBubbles">
        <ul>
            <li v-for="post in wallOfPosts" :key="post">
                <div class="titlePostBubble" v-bind:href="post.url"> {{ post.title }} </div>  
                <div class="contentPostBubble">{{ post.content }}, {{ post.updatedAt}} </div>
            </li>
        </ul>
    </div>
    <button @click="showPosts">Afficher tous les posts</button>
</template>

<script>
    import axios from "axios"
    export default {
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
            axios.get('http://localhost:3000/post/latestsPosts')//,{headers:{'Authorization': "bearer " + emplacement du token}})
            
            .then(response =>{
                this.wallOfPosts = response.data })
            
            .catch(error => { console.error(error)});
        }
    }
</script>

<style lang="scss" scoped>
.LatestPostsBubbles {
    display: grid;
    grid-template-columns: 66vw 33vw;
    grid-template-rows: repeat (auto-fit, 10vh);
    grid-column-gap: 2vw;
    grid-row-gap: 11vh;
}
li {
    margin-bottom: 10px;
    margin-left: 2em;
}
.titlePostBubble {
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #e4e723;
    border-radius: .9rem;
    box-shadow: 0px 0px 20px #a4a70a;
    background-color: #fff38a;
}
.contentPostBubble { 
    background-color: #ddffc6;
    border: 4px solid #98fa3c;
    border-radius: .9rem;   
    box-shadow: 0px 0px 20px #709115;
    height: 100%;
}
// .LatestPostsBubbles //, .menus__menu2--zoom, .menus__menu3--zoom, .menus__menu4--zoom 
// {
//   transform: scale(1);
//   transition: transform 600ms, opacity 1000ms;
// }
.contentPostBubble:hover {
    transform: scale(1.1);
    transition: transform 500ms; 
}

</style>-->
