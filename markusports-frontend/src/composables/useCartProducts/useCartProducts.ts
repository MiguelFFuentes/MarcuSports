import {computed, onMounted, ref} from "vue";
import ShoppingCartManager from "@/services/ShoppingCart/ShoppingCartManager/ShoppingCartManager";
import {useRouter} from "vue-router";
import type {CartProduct} from "@/models/ShoppingCart";

export function useCartProducts() {

  const loading = ref(false)
  const cart = ref()
  const router = useRouter()
  const error = ref()

  const totalPrice = computed(() => {
    return cart.value?.products.reduce((sum: number, product: CartProduct) => sum + product.price, 0)
  })

  onMounted(async () => {
    loading.value = true
    try {
      cart.value = await ShoppingCartManager.getShoppingCart()
      if (!cart.value) {
        await router.push({name: 'home'})
      }
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })

  return {cart, totalPrice, loading, error}
}
