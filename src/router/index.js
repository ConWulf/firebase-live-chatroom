import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import SignUp from '../views/SignUp.vue'
import Chatroom from "@/views/Chatroom"
import { auth } from "@/firebase/config";

//route gard for authentication
const authentication = (to, from, next) => {
  let user = auth.currentUser
  if(!user)
    next({name: 'welcome'})
  else
  next()
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: authentication
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
