import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/pages/Home.vue'
import SignInPage from './components/pages/SignIn.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/sign-in', name: 'Sign in', component: SignInPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
