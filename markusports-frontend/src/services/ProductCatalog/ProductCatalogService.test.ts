import {describe, it, expect, vi, afterEach} from 'vitest'
import productCatalogService from './ProductCatalogService'
import {client} from "@/services/AxiosClient";

describe('ProductCatalogService', () => {
  it('should fetch products successfully', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: '' },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '' }
    ]
    vi.spyOn(client, 'get').mockResolvedValue({data: mockProducts})

    const products = await productCatalogService.getProducts()
    expect(products).toEqual(mockProducts)
  })

  it('should handle error while fetching products', async () => {
    const mockError = new Error('Error loading products')
    vi.spyOn(client, 'get').mockRejectedValue(mockError)
    await expect(productCatalogService.getProducts).rejects.toThrowError(mockError)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
})
