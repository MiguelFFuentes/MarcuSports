import {flushPromises, mount} from '@vue/test-utils'
import {afterAll, describe, expect, it, vi} from 'vitest'
import ProductDetailsPage from '@/pages/ProductDetails/ProductDetailsPage.vue'
import {useProduct} from '@/composables/useProduct/useProduct'

import vuetify from "@/plugins/vuetify"
import Product from "@/components/Product/Product.vue";
import AlertError from "@/components/AlertError/AlertError.vue";

vi.mock('@/composables/useProduct/useProduct')
vi.mock('@/composables/useCart/useCart', () => ({
  useCart: vi.fn().mockImplementation(() => ({
    addToCart: vi.fn(),
    cartError: false,
    cartLoading: false
  }))
}))
vi.mock('vue-router', () => ({
  useRoute: vi.fn().mockImplementation(() => ({params: {id: 1}}))
}))

describe('ProductDetailsPage.vue', () => {

  afterAll(() => {
    vi.resetAllMocks()
  })

  it('should render an error alert when an error is received', () => {
    useProduct.mockImplementation((_) => ({
      product: undefined,
      loading: false,
      error: {message: 'Error loading products'}
    }))

    const wrapper = mount(ProductDetailsPage, {global: {plugins: [vuetify]}})

    expect(wrapper.findComponent(AlertError).exists()).toBe(true)
  })

  it('should render the product', async () => {
    useProduct.mockImplementation((_) => ({
      product: {id: 1, name: 'ProductDetails 1', description: 'Description 1', price: 100, image: '', parts: []},
      loading: false,
      error: null
    }))

    const wrapper = mount(ProductDetailsPage, {global: {plugins: [vuetify]}})
    await flushPromises()

    expect(wrapper.findComponent(Product).exists()).toBe(true)
  })
})
