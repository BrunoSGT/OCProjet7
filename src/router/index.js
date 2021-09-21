import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Admin from '../views/Admin.vue'
import Post from '../views/Post.vue'
import PostToComment from '../views/PostToComment.vue'

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
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
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
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  // {
  //   path: '/userconnectednavbar',
  //   name: 'UserConnectedNavBar',
  //   component: () => import('../components/UserConnectedNavBar')
  // },    
  {
    path: '/allusers',
    name: 'AllUsers',
    component: () => import('../components/AllUsers.vue')
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
    component: PostToComment
  },
  {
    path: '/allcomments/',
    name: 'AllComments',
    component: () => import('../views/AllComments.vue')
  },
  {
    path: '/allcomments/:id',
    name: 'AllComments',
    component: () => import('../views/AllComments.vue')
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
