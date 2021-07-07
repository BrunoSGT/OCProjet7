<template>
    <div id="wallOfPosts">
        <h1>Le mur des posts</h1>
    </div>
    <div class="allPostsBubbles">
        <ul>
            <li v-for="post in wallOfPosts" :key="post">
                <a v-bind:href="post.url"> {{ post.title }} </a> : {{ post.content }}
            </li>
        </ul>
    </div>
    
</template>
<script>
export default {
  name: 'WallOfPosts',
  props: {
    msg: String
  }
}
</script>