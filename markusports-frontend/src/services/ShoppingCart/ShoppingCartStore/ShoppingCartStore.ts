export interface ShoppingCartStore {
  getShoppingCartId(): number | undefined
  setShoppingCartId(shoppingCartId: number): void
  deleteShoppingCart(): void
}
