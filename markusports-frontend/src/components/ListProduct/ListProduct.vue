<template>
  <v-card>
    <v-img :src="product.image || DEFAULT_PRODUCT_IMAGE_URL" height="200px" cover></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>Base Price: {{ product.price }} €</v-card-subtitle>
    <v-card-actions>
      <router-link :to="{name: 'product', params: {id: product.id}}">
        <v-btn color="primary">Details</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type {Product} from "@/models/Product";
import {DEFAULT_PRODUCT_IMAGE_URL} from "@/models/Product";

interface ProductProps {
  product: Product
}
const {product} = defineProps<ProductProps>()


</script>

