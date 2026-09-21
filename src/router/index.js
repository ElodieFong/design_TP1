import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '../views/Accueil.vue'
import Articles from '../views/Articles.vue'
import ArticleDetails from '../views/ArticleDetails.vue'
import Ajouter from '../views/Ajouter.vue'
import PanierPage from '../views/PanierPage.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/articles', component: Articles },
  { path: '/article/:id', component: ArticleDetails },
  { path: '/ajouter', component: Ajouter },
  { path: '/panier', component: PanierPage },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const connected = localStorage.getItem('connected') === 'true'

  if (to.meta.requiresAuth && !connected) {
    return '/login'
  }
})

export default router