import type {ProductPartOption} from "@/models/ProductPartOption";

export class ProductPart {
  id: number
  name: string
  options: ProductPartOption[]

  constructor(id: number, name: string, options: ProductPartOption[]) {
    this.id = id;
    this.name = name;
    this.options = options;
  }
}
