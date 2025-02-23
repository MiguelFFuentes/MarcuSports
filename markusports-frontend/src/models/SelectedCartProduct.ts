import type {ProductPartOption} from "@/models/ProductPartOption";

export class SelectedCartProduct {
  productId: number
  selectedOptions: { [partId: number]: ProductPartOption } = {}

  constructor(productId: number) {
    this.productId = productId
  }

}
