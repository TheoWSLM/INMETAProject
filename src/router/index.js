import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InstructionView from '../views/InstructionView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserView from '@/views/userView.vue'
import TradeView from '@/views/TradeView.vue'
import CardsView from '@/views/CardsView.vue'

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
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/trades',
      name: 'trades',
      component: TradeView
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardsView
    }
  ]
})

export default router
