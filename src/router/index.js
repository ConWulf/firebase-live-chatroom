import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import SignUp from '../views/SignUp.vue'
import Chatroom from "@/views/Chatroom";

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
    component: Chatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
