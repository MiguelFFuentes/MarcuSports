export interface CartOption {
    id: number
    name: string
    stock: number
    partId: number
    incompatibleOptions: CartOption[]
}