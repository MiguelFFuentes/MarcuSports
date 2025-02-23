import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/Home/HomePage.vue";
import ProductDetailsPage from "@/pages/ProductDetails/ProductDetailsPage.vue";
import CartPage from "@/pages/Cart/CartPage.vue";
import ThankYouPage from "@/pages/ThankYou/ThankYouPage.vue";

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/product/:id', component: ProductDetailsPage, name: 'product'},
  { path: '/cart', component: CartPage, name: 'cart'},
  { path: '/thanks', component: ThankYouPage, name: 'thanks'},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
