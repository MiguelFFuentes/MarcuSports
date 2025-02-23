import {client} from "@/services/AxiosClient";
import type {ShoppingCart} from "@/models/ShoppingCart";
import type {CreateShoppingCartPayload} from "@/models/CreateShoppingCartPayload";
import type {UpdateShoppingCartPayload} from "@/models/UpdateShoppingCartPayload";
import {IncompatibleOptionsError} from "@/models/exceptions/IncompatibleOptionsError";

export class ShoppingCartService {

  async create(payload: CreateShoppingCartPayload): Promise<ShoppingCart> {
    try {
      const {data} = await client.post<ShoppingCart>('/shoppingcarts', payload)
      return data;
    } catch (error: any) {
      if (error.response.data?.optionId) throw new IncompatibleOptionsError(error.response.data.optionId)
      throw new Error(error.response.data.error)
    }
  }

  async update(payload: UpdateShoppingCartPayload): Promise<ShoppingCart> {
    try {
      const {data} = await client.put<ShoppingCart>('/shoppingcarts/' + payload.id, payload)
      return data;
    } catch (error: any) {
      if (error.response.data?.optionId) throw new IncompatibleOptionsError(error.response.data.optionId)
      throw new Error(error.response.data.error)
    }
  }

  async get(shoppingCartId: number): Promise<ShoppingCart> {
    try {
      const {data} = await client.get<ShoppingCart>('/shoppingcarts/' + shoppingCartId)
      return data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  }
}
