import type {ProductPart} from "@/models/ProductPart";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  parts: ProductPart[];

  constructor(id: number, name: string, description: string, price: number, parts: ProductPart[], image?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.parts = parts;
    this.image = image;
  }
}

export const DEFAULT_PRODUCT_IMAGE_URL = 'https://www.montaguebikes.com/wp-content/uploads/2012/10/Stolen_bike2.png'
