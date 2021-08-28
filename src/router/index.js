import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LatestPosts from '../views/LatestPosts.vue'
import Post from '../views/Post.vue'
import PostToComment from '../views/PostToComment.vue'
//import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /*webpackChunkName  "about" */  '../views/About.vue')
  },  
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(  '../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },  
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },    
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/wallofposts',
    name: 'WallOfPosts',
    component: () => import('../views/WallOfPosts.vue')
  },
  {
    path: '/posttocomment/:id',
    name: 'PostToComment',
    component: PostToComment
  },
  {
    path: '/allcomments/:id',
    name: 'AllComments',
    component: () => import('../views/AllComments.vue')
  },
  {
    path: '/latestposts',
    name: 'LatestPosts',
    component: LatestPosts
  },
  {
    path: '/post',
    name: 'Post-form',
    component: Post
  }      
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
