import {flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import Home from '@/pages/Home/Home.vue'
import {useProducts} from '@/composables/useProducts'
import vuetify from "@/plugins/vuetify"
import LoadingProducts from "@/components/LoadingProducts/LoadingProducts.vue";
import {VAlert} from "vuetify/components";
import Product from "@/components/ProductList/Product.vue";

vi.mock('@/composables/useProducts')

describe('Home.vue', () => {

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should render the loading component while loading', async () => {
    useProducts.mockReturnValue({
      products: [],
      loading: true,
      error: null
    })

    const wrapper = mount(Home, {global: {plugins: [vuetify]}})
    await flushPromises()
    expect(wrapper.findComponent(LoadingProducts).exists()).toBe(true)
  })

  it('should render an error alert when an error is received', () => {
    useProducts.mockReturnValue({
      products: [],
      loading: false,
      error: {message: 'Error loading products'}
    })

    const wrapper = mount(Home, {global: {plugins: [vuetify]}})
    expect(wrapper.findComponent(VAlert).exists()).toBe(true)
  })

  it('should render the products', () => {
    useProducts.mockReturnValue({
      products: [
        {id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: ''},
        {id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: ''}
      ],
      loading: false,
      error: null
    })

    const wrapper = mount(Home, {global: {plugins: [vuetify]}})
    expect(wrapper.findAllComponents(Product).length).toBe(2)
  })
})
