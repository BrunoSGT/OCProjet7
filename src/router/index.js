import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue' 
//import About from '../views/About.vue' //autre façon d'importer le component dans la route 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /*webpackChunkName  "about" */  '../views/About.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/Logout')
  }, 
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(  '../views/Signup.vue')
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  },
  {
    path: '/allusers',
    name: 'AllUsers',
    component: () => import('../components/AllUsers.vue')
  },
  {
    path: '/post',
    name: 'Post-form',
    component: () => import('../views/Post.vue')

  },      
  {
    path: '/allposts',
    name: 'AllPosts',
    component: () => import('../components/AllPosts.vue')
  },
  {
    path: '/latestsposts',
    name: 'LatestsPosts',
    component: () => import('../components/LatestsPosts.vue')
  },
  {
    path: '/wallofposts',
    name: 'WallOfPosts',
    component: () => import('../views/WallOfPosts.vue')
  },
  {
    path: '/posttocomment/:id',
    name: 'PostToComment',
    component: () => import('../views/PostToComment.vue')

  },
  {
    path: '/allcommentsbypost',
    name: 'AllCommentsByPost',
    component: () => import('../views/AllCommentsByPost.vue')
  },
  
  {
    path: '/allcomments/:id',
    name: 'AllComments',
    component: () => import('../views/AllComments.vue')
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: () => import('../components/UserProfile.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
