import {flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {defineComponent} from 'vue'
import {useCartProducts} from '@/composables/useCartProducts/useCartProducts'
import ShoppingCartmanager from '@/services/ShoppingCart/ShoppingCartManager/ShoppingCartManager'
import type {ShoppingCart} from "@/models/ShoppingCart";

describe('useCartProducts', () => {

  const mockShoppingCart: ShoppingCart = {
    id: 1,
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        selectedOptions: ['Option 1', 'Option 2']
      },
      {
        id: 1,
        name: 'Product 2',
        price: 50,
        selectedOptions: ['Option 1', 'Option 2']
      }
    ]
  }

  const TestComponent = defineComponent({
    setup() {
      return useCartProducts()
    },
    template: '<div></div>'
  })

  it('should fetch the shoppingcart products successfully', async () => {
    vi.spyOn(ShoppingCartmanager, 'getShoppingCart').mockResolvedValue(mockShoppingCart)

    const wrapper = mount(TestComponent)
    await flushPromises()

    const {cart, loading, error} = wrapper.vm
    expect(cart).toEqual(mockShoppingCart)
    expect(loading).toBe(false)
    expect(error).toBeUndefined()
  })

  it('should calculate shopping cart total price', async () => {
    vi.spyOn(ShoppingCartmanager, 'getShoppingCart').mockResolvedValue(mockShoppingCart)

    const wrapper = mount(TestComponent)
    await flushPromises()

    const {totalPrice} = wrapper.vm
    expect(totalPrice).toBe(150)
  })

  it('should handle error while fetching the shoppingcart products', async () => {
    const mockError = new Error('Error loading shopping cart')
    vi.spyOn(ShoppingCartmanager, 'getShoppingCart').mockRejectedValue(mockError)

    const wrapper = mount(TestComponent)
    await flushPromises()

    const {cart, loading, error} = wrapper.vm

    expect(cart).toEqual(undefined)
    expect(loading).toBe(false)
    expect(error).toBe(mockError)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
})
