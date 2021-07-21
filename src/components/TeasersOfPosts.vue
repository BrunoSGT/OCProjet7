<template>
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
<script>

//    for (let i = 0; i < colors.length; i++) 
let LatestPostsBubbles = post.id
for (let i = 0; i < id.length; i++ < 5 )
export default {
    name: 'TeasersOfPosts',
    props: {
        msg: String
    }
}
</script>