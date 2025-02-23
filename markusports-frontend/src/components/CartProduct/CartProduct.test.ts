import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CartProductComponent from '@/components/CartProduct/CartProduct.vue'
import vuetify from "@/plugins/vuetify";
import type {CartProduct} from "@/models/ShoppingCart";

describe('CartProduct.vue', () => {

  const cartProduct: CartProduct = {
    id: 1,
    name: 'Test bicycle',
    price: 10,
    selectedOptions: [
      'Option 1',
      'Option 2'
    ]

  }
  it('should render the product props correctly', () => {
    const wrapper = mount(CartProductComponent, {
      props: { product: cartProduct },
      global: {plugins: [vuetify]}
    })
    expect(wrapper.find('.v-card-title').text()).toBe(cartProduct.name)
    expect(wrapper.find('.v-card-subtitle').text()).toBe(`Base Price: ${cartProduct.price} €`)
    expect(wrapper.find('.v-card-text').text()).toContain(cartProduct.selectedOptions[0])
    expect(wrapper.find('.v-card-text').text()).toContain(cartProduct.selectedOptions[1])
  })
})
