import {SelectedCartProduct} from "@/models/SelectedCartProduct";
import ShoppingCartManager from "@/services/ShoppingCart/ShoppingCartManager/ShoppingCartManager";
import {IncompatibleOptionsError} from "@/models/exceptions/IncompatibleOptionsError";
import {ProductPartOption} from "@/models/ProductPartOption";
import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

export function useCart() {

  const cartError = ref()
  const cartLoading = ref(false)
  const cartId = ref()
  const router = useRouter()
  const route = useRoute()

  const addToCart = async (cartProduct: SelectedCartProduct) => {
    cartLoading.value = true
    try {
      await ShoppingCartManager.addProduct(cartProduct)
      await router.push({name: 'cart'})
    } catch (e) {
      if (e instanceof IncompatibleOptionsError) {
        const [incompatibleOption, incompatibleOption2] = getIncompatibleOptions(cartProduct, e.optionId)
        cartError.value = new Error(`"${incompatibleOption.name}" is not compatible with "${incompatibleOption2.name}"`)

      } else {
        cartError.value = new Error('An error occurred while adding the product to the shopping cart')
      }
    } finally {
      cartLoading.value = false
    }
  }

  const deleteCart = () => {
    ShoppingCartManager.deleteShoppingCart()
  }

  const getIncompatibleOptions = (cartProduct: SelectedCartProduct, incompatibleOptionId: number): [ProductPartOption, ProductPartOption] => {
    const selectedOptions = Object.values(cartProduct.selectedOptions)
    return [selectedOptions.find((option: ProductPartOption) => option.incompatibleOptions.includes(incompatibleOptionId)),
      selectedOptions.find((option: ProductPartOption) => option.id === incompatibleOptionId)]
  }

  watch(route, () => {
    cartId.value = ShoppingCartManager.getShoppingCartId()
  })

  return {cartId, addToCart, deleteCart, cartError, cartLoading}
}
