import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProductComponent from '@/components/Product/Product.vue'
import vuetify from "@/plugins/vuetify";
import type {Product} from "@/models/Product";

describe('Product.vue', () => {

  const product: Product = {
    id: 1,
    name: 'Test bicycle',
    description: 'Test description',
    price: 10,
    parts: [
      {
        id: 1,
        name: 'Part 1',
        options: [
          {
            id: 1,
            name: 'Option 1',
          },
          {
            id: 2,
            name: 'Option 2',
          }
        ]
      }
    ]

  }
  it('should render the product props correctly', () => {
    const wrapper = mount(ProductComponent, {
      props: { product, disabled: false },
      global: {plugins: [vuetify]}
    })
    expect(wrapper.findComponent('.v-card-title').text()).toBe(product.name)
    expect(wrapper.find('.v-card-subtitle').text()).toBe(product.description)
    expect(wrapper.find('.v-card-text').text()).toContain(product.price)
  })

  it('should have the disabled button when props are passed', () => {
    const wrapper = mount(ProductComponent, {
      props: { product, disabled: true },
      global: {plugins: [vuetify]}
    })

    expect(wrapper.find('.v-btn').attributes().disabled).toBeDefined()
  })
})
