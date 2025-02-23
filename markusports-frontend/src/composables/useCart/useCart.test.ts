import {mount} from '@vue/test-utils'
import {afterAll, afterEach, describe, expect, it, vi} from 'vitest'
import {defineComponent, ref} from 'vue'
import ShoppingCartManager from '@/services/ShoppingCart/ShoppingCartManager/ShoppingCartManager'
import {useCart} from "@/composables/useCart/useCart";
import type {SelectedCartProduct} from "@/models/SelectedCartProduct";

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn()
  }),
  useRoute: () => (ref())
}))
describe('useCart', () => {
  const TestComponent = defineComponent({
    setup() {
      return useCart()
    },
    template: '<div></div>'
  })

  it('should add the product to the shopping cart', async () => {
    const mockNewProduct: SelectedCartProduct = {
      productId: 1,
      selectedOptions: {1: {id: 1, name: 'option1', incompatibleOptions: []}}
    }
    const addProductMock = vi.spyOn(ShoppingCartManager, 'addProduct')

    const wrapper = mount(TestComponent)
    const {addToCart, cartError, cartLoading} = wrapper.vm

    await addToCart(mockNewProduct)

    expect(cartLoading).toBe(false)
    expect(cartError).toBeUndefined()
    expect(addProductMock).toHaveBeenCalledWith(mockNewProduct)
  })

  it('should delete the shopping cart', () => {
    const deleteCartMock = vi.spyOn(ShoppingCartManager, 'deleteShoppingCart')
    const wrapper = mount(TestComponent)
    const {deleteCart} = wrapper.vm
    deleteCart()

    expect(deleteCartMock).toHaveBeenCalled()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  afterAll(() => {
    vi.resetAllMocks()
  })
})
