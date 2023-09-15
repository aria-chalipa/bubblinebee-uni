import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView'
import Hot from '../views/views2/HotDreanks'
import Cold from '../views/views2/ColdDreanks'
import Notela from '../views/views2/NotelaBar'
import Vafel from '../views/views2/VafelBar'
import Cake from '../views/views2/CakeIcecaream'
import Breakfast from '../views/views2/breakfast'
import Shake from "../views/views2/Shakes"







const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot
  },
  {
    path: '/cold',
    name: 'cold',
    component: Cold
  },
  {
    path: '/notela',
    name: 'notela',
    component: Notela
  },
  {
    path: '/vafel',
    name: 'vafel',
    component: Vafel
  },
  {
    path: '/cake',
    name: 'cake',
    component: Cake
  },
  {
    path: '/breakfast',
    name: 'breakfast',
    component: Breakfast
  },
  {
    path: '/shake',
    name: 'shake',
    component: Shake
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
