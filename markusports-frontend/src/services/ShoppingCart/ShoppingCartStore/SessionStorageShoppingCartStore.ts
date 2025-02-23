import type {ShoppingCartStore} from "@/services/ShoppingCart/ShoppingCartStore/ShoppingCartStore";

export class SessionStorageShoppingCartStore implements ShoppingCartStore{
  getShoppingCartId(): number | undefined {
    const id = sessionStorage.getItem('shoppingCartId')
    if (!id) return
    return parseInt(id)
  }

  setShoppingCartId(shoppingCartId: number): void {
    sessionStorage.setItem('shoppingCartId', shoppingCartId.toString())
  }

  deleteShoppingCart(): void {
    sessionStorage.removeItem('shoppingCartId')
  }

}
