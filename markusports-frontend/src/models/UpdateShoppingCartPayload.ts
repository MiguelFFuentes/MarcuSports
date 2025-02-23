import type {CreateShoppingCartPayload} from "@/models/CreateShoppingCartPayload";

export interface UpdateShoppingCartPayload extends CreateShoppingCartPayload {
  id: number
}
