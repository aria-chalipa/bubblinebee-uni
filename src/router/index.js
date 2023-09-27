import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView'
import Coffe from '../views/views2/Coffe'
import ColdCoffe from '../views/views2/ColdCoffe'
import Hot from '../views/views2/HotDreanks'
import Cold from '../views/views2/ColdDreanks'
import Cake from '../views/views2/CakeIcecaream'
import Breakfast from '../views/views2/breakfast'
import Shake from "../views/views2/Shakes"
import Food from "../views/views2/Food"




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
    path: '/coffe',
    name: 'coffe',
    component: Coffe
  },
  {
    path: '/coldcoffe',
    name: 'coldcoffe',
    component: ColdCoffe
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
  {
    path: '/food',
    name: 'food',
    component: Food
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
