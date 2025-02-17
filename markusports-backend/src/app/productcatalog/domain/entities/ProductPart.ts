import {ProductPartOption} from "./ProductPartOption";

export interface ProductPart {
    id: number
    name: string
    options: ProductPartOption[]
}