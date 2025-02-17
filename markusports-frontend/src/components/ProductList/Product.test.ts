import {mount} from '@vue/test-utils'
import {describe, it, expect} from 'vitest'
import Product from '@/components/ProductList/Product.vue'
import vuetify from "@/plugins/vuetify";

describe('Product.vue', () => {
  const product = {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
    image: 'https://example.com/image.jpg'
  }

  it('should render product props correctly', () => {
    const wrapper = mount(Product, {
      props: {product},
      global: {
        plugins: [vuetify]
      }
    })

    expect(wrapper.find('.v-card-title').text()).toBe(product.name)
    expect(wrapper.find('.v-card-subtitle').text()).toBe(`Base Price: ${product.price} €`)
    expect(wrapper.find('img').attributes('src')).toBe(product.image)
  })

  it('should render default image when no image is provided', () => {
    const productWithoutImage = {...product, image: ''}
    const wrapper = mount(Product, {
      props: {product: productWithoutImage},
      global: {
        plugins: [vuetify]
      }
    })

    const defaultImageUrl = 'https://www.montaguebikes.com/wp-content/uploads/2012/10/Stolen_bike2.png'
    expect(wrapper.find('img').attributes('src')).toBe(defaultImageUrl)
  })
})
