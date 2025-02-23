import {afterEach, describe, expect, it, vi} from 'vitest'
import {ShoppingCartService} from './ShoppingCartService'
import {client} from "@/services/AxiosClient";

describe('ShoppingCartService', () => {

  const shoppingCartService = new ShoppingCartService()

  describe('create', () => {
    it('should create a shopping cart successfully', async () => {

      const mockShoppingCart = { id: 1, products: [] }
      vi.spyOn(client, 'post').mockResolvedValue({data: mockShoppingCart})

      const shoppingCart = await shoppingCartService.create({})
      expect(shoppingCart).toEqual(mockShoppingCart)
    })

    it('should handle error while creating shopping cart', async () => {
      const mockError = { response: { data: { error: 'Error creating shopping cart' } } }
      vi.spyOn(client, 'post').mockRejectedValue(mockError)
      await expect(shoppingCartService.create).rejects.toThrowError('Error creating shopping cart')
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
})
