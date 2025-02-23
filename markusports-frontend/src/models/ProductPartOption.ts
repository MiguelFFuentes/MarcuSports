export class ProductPartOption {
  id: number
  name: string
  stock: number
  incompatibleOptions: ProductPartOption[]

  constructor(id: number, name: string, stock: number, incompatibleOptions: ProductPartOption[]) {
    this.id = id
    this.name = name
    this.stock = stock
    this.incompatibleOptions = incompatibleOptions
  }
}
