import {ProductPart} from "./ProductPart";

export interface Product {
    id: number
    name: string
    description: string
    price: number
    image?: string
    parts: ProductPart[]
}
