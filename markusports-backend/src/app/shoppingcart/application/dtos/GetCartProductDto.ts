export interface GetCartProductDto {
    id: number
    name: string
    price: number
    image?: string
    selectedOptions: string[]
}