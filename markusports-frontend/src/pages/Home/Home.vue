<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">MarkuSports - The shop you always trusted, now online!</h1>
      </v-col>
    </v-row>
    <v-row>
      <LoadingProducts v-if="loading && !error" :products-count="6" />

      <v-col cols="12" v-if="error">
        <v-alert type="error">{{ error.message }}</v-alert>
      </v-col>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <Product :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {useProducts} from "@/composables/useProducts"
import LoadingProducts from "@/components/LoadingProducts/LoadingProducts.vue";
import Product from "@/components/ProductList/Product.vue";

const {products, loading, error} = useProducts()

</script>

