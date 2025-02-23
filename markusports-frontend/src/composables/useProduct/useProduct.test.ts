import {flushPromises, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {defineComponent} from 'vue'
import {useProduct} from '@/composables/useProduct/useProduct'
import productCatalogService from '@/services/ProductCatalog/ProductCatalogService'

describe('useProduct', () => {
  const TestComponent = defineComponent({
    setup() {
      return useProduct()
    },
    template: '<div></div>'
  })

  it('should fetch the product successfully', async () => {
    const mockProduct = [
      {id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: ''}
    ]
    vi.spyOn(productCatalogService, 'getProduct').mockResolvedValue(mockProduct)

    const wrapper = mount(TestComponent)
    await flushPromises()

    const {product, loading, error} = wrapper.vm
    expect(product).toEqual(mockProduct)
    expect(loading).toBe(false)
    expect(error).toBeUndefined()
  })

  it('should handle error while fetching the product', async () => {
    const mockError = new Error('Error loading product')
    vi.spyOn(productCatalogService, 'getProduct').mockRejectedValue(mockError)

    const wrapper = mount(TestComponent)
    await flushPromises()

    const {product, loading, error} = wrapper.vm

    expect(product).toEqual(undefined)
    expect(loading).toBe(false)
    expect(error).toBe(mockError)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
})
