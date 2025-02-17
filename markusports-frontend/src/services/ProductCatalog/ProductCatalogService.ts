import {client} from "@/services/AxiosClient";
import type {Product} from "@/models/Product";

class ProductCatalogService {

  async getProducts(): Promise<Product[]> {
    const {data} = await client.get<Product[]>('/products')
    return data;
  }
}
export default new ProductCatalogService()
