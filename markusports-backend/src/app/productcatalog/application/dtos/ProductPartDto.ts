import {ProductPartOptionDto} from "./ProductPartOptionDto";

export interface ProductPartDto {
    id: number
    name: string
    options: ProductPartOptionDto[]
}