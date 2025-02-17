import productCatalogService from "@/services/ProductCatalog/ProductCatalogService";
import {ref, onMounted} from "vue";
import type {Product} from "@/models/Product";

export function useProducts() {
  const products = ref<Product[]>([])
  const loading = ref(true)
  const error = ref()

  onMounted(async () => {
    try {
      products.value = await productCatalogService.getProducts()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })
  return {products, loading, error}
}
