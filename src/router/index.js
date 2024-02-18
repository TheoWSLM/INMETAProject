import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InstructionView from '../views/InstructionView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MyCardsViewVue from '@/views/MyCardsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: InstructionView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/cards',
      name: 'cards',
      component: MyCardsViewVue
    }
  ]
})

export default router
