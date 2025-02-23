<template>
  <v-card>
    <v-img :src="product.image || DEFAULT_PRODUCT_IMAGE_URL" height="200px" cover></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>Base Price: {{ product.price }} €</v-card-subtitle>
    <v-card-text>
      <v-container class="text-body-2" v-for="option in product.selectedOptions">- {{ option }}</v-container>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import type {CartProduct} from "@/models/ShoppingCart";
import {DEFAULT_PRODUCT_IMAGE_URL} from "@/models/Product";

interface CartProductProps {
  product: CartProduct
}

const {product} = defineProps<CartProductProps>()

</script>
