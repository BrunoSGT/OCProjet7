<template>
    <a>barre de recherche</a>
    <div class="PostsBubbles">
        <ul>
            <li>
                <div class="titlePostBubble" > {{ posts.title }} </div>  
                <div class="contentPostBubble">{{ posts.content }}, {{ posts.updatedAt}} </div>
                <Comment/>
            </li>
        </ul>
        
    </div>
</template>

<script>
    import Comment from '../components/Comment.vue'
    import axios from 'axios'

    export default {
        name: 'PostToComment',
        components: {
            Comment
        },
        data() {
            return {
                posts: [],
                showPosts: false,
                comments: []
               // showUsers: false
            }
        },
        mounted() {
            axios.get('http://localhost:3000/post/'+ this.$route.params.id//,{headers:{'Authorization': "bearer " + emplacement du token}})
            )
            .then(response =>{
                this.posts = response.data;
                console.log(this.posts)})
            
            .catch(error => { console.error(error)});
        }
       
    }
</script>

<style lang="scss" scoped>
.titlePostBubble {
    margin-top: 25px;
    margin-bottom: 10px;
    border: 4px solid #e4e723;
    border-radius: .9rem;
    box-shadow: 0px 0px 20px #a4a70a;
    background-color: #fff38a;
}
.contentPostBubble  {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    flex-basis: 15px;
    width: 50%;
    height: fit-content;
    margin-left: 25%;
    background-color: #ddffc6;
    border: 4px solid #98fa3c;
    border-radius: .9rem;   
    box-shadow: 0px 0px 20px #709115;
    height: 100%;
}
</style>