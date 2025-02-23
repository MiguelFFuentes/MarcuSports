<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Check out the new selection of our bikes:</h1>
      </v-col>
    </v-row>
    <v-row>
      <SkeletonProducts v-if="loading && !error" :products-count="6" />
      <Error v-if="error" :error="error"/>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <ListProduct :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {useProducts} from "@/composables/useProducts/useProducts"
import SkeletonProducts from "@/components/SkeletonProducts/SkeletonProducts.vue";
import ListProduct from "@/components/ListProduct/ListProduct.vue";
import Error from "@/components/AlertError/AlertError.vue";

const {products, loading, error} = useProducts()

</script>

