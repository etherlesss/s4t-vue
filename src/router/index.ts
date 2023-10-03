import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Frontpage from "../views/Frontpage.vue"
import Search from "../views/Search.vue"
import Cart from "../views/Cart.vue"
import Details from "../views/Details.vue"
import Support from "../views/Support.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Frontpage
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
