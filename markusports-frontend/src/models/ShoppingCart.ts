export interface ShoppingCart {
  id: number,
  products: CartProduct[]
}

export interface CartProduct {
  id: number
  image?: string
  name: string
  price: number,
  selectedOptions: string[]
}
