export interface CreateShoppingCartPayload {
  products: [{
    id: number
    selectedOptionsIds: number[]
  }]
}
