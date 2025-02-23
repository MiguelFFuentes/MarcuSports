import productCatalogService from "@/services/ProductCatalog/ProductCatalogService";
import {onMounted, ref} from "vue";
import type {Product} from "@/models/Product";

export function useProduct(productId: number) {
  const product = ref<Product>()
  const loading = ref(true)
  const error = ref()

  onMounted(async () => {
    try {
      product.value = await productCatalogService.getProduct(productId)
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })
  return {product, loading, error}
}
