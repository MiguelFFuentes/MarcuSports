import {ProductPartDto} from "./ProductPartDto";

export interface ProductDto {
    id: number
    name: string
    description: string
    price: number
    image?: string
    parts: ProductPartDto[]
}
