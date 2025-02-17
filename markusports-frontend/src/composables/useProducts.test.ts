import { mount, flushPromises } from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import { defineComponent, ref } from 'vue'
import { useProducts } from '@/composables/useProducts'
import productCatalogService from '@/services/ProductCatalog/ProductCatalogService'

describe('useProducts', () => {
  const TestComponent = defineComponent({
    setup() {
      return useProducts()
    },
    template: '<div></div>'
  })

  it('should fetch products successfully', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: '' },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '' }
    ]
    vi.spyOn(productCatalogService, 'getProducts').mockResolvedValue(mockProducts)

    const wrapper = mount(TestComponent)
    await flushPromises()

    const { products, loading, error } = wrapper.vm
    expect(products).toEqual(mockProducts)
    expect(loading).toBe(false)
    expect(error).toBeUndefined()
  })

  it('should handle error while fetching products', async () => {
    const mockError = new Error('Error loading products')
    vi.spyOn(productCatalogService, 'getProducts').mockRejectedValue(mockError)

    const wrapper = mount(TestComponent)
    await flushPromises()

    const { products, loading, error } = wrapper.vm

    expect(products).toEqual([])
    expect(loading).toBe(false)
    expect(error).toBe(mockError)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
})
