export interface ProductPartOption {
    id: number
    name: string
    stock: number
    incompatibleOptions: ProductPartOption[]
}