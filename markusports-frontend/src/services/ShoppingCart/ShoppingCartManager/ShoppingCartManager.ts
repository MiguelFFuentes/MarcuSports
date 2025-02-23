import {ShoppingCartService} from "@/services/ShoppingCart/ShoppingCartService/ShoppingCartService";
import type {SelectedCartProduct} from "@/models/SelectedCartProduct";
import {ProductPartOption} from "@/models/ProductPartOption";
import type {ShoppingCartStore} from "@/services/ShoppingCart/ShoppingCartStore/ShoppingCartStore";
import {SessionStorageShoppingCartStore} from "@/services/ShoppingCart/ShoppingCartStore/SessionStorageShoppingCartStore";
import type {ShoppingCart} from "@/models/ShoppingCart";

class ShoppingCartManager {
  constructor(private shoppingCartService: ShoppingCartService, public store: ShoppingCartStore) {
  }

  async addProduct(product: SelectedCartProduct) {
    const selectedOptionsIds = Object.values(product.selectedOptions).map((option: ProductPartOption) => option.id)
    const newProduct = {
      id: product.productId as number,
      selectedOptionsIds
    }

    const shoppingCartId = this.store.getShoppingCartId()
    if (shoppingCartId) {
      await this.shoppingCartService.update({id: shoppingCartId, products: [newProduct]})
    } else {
      const shoppingCart = await this.shoppingCartService.create({products: [newProduct]})
      this.store.setShoppingCartId(shoppingCart.id)
    }
  }

  getShoppingCartId(): number | undefined {
    return this.store.getShoppingCartId()
  }

  async getShoppingCart(): Promise<ShoppingCart | undefined> {
    const shoppingCartId = this.getShoppingCartId()
    if (!shoppingCartId) return
    return await this.shoppingCartService.get(shoppingCartId)
  }

  deleteShoppingCart() {
    this.store.deleteShoppingCart()
  }
}

export default new ShoppingCartManager(new ShoppingCartService(), new SessionStorageShoppingCartStore())
