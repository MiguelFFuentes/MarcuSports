import {afterEach, describe, expect, it, vi} from 'vitest'
import productCatalogService from './ProductCatalogService'
import {client} from "@/services/AxiosClient";

describe('ProductCatalogService', () => {

  describe('getProducts', () => {
    it('should fetch products successfully', async () => {
      const mockProducts = [
        {id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: ''},
        {id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: ''}
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
  })

  describe('getProduct', () => {
    it('should fetch a product successfully', async () => {
      const mockProduct = {
        id: 1,
        name: 'Product 1',
        description: 'Description 1', price: 100, image: ''
      }

      vi.spyOn(client, 'get').mockResolvedValue({data: mockProduct})

      const product = await productCatalogService.getProduct()
      expect(product).toEqual(mockProduct)
    })

    it('should handle error while fetching a product', async () => {
      const mockError = new Error('Error loading products')
      vi.spyOn(client, 'get').mockRejectedValue(mockError)
      await expect(productCatalogService.getProduct()).rejects.toThrowError(mockError)
    })
  })


  afterEach(() => {
    vi.restoreAllMocks()
  })
})
