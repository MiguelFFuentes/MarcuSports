<template>
  <v-card>
    <v-img :src="product.image || defaultImageUrl" height="200px" cover></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>Base Price: {{ product.price }} €</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type {Product} from "@/models/Product";

interface ProductProps {
  product: Product
}
const {product} = defineProps<ProductProps>()
const defaultImageUrl = 'https://www.montaguebikes.com/wp-content/uploads/2012/10/Stolen_bike2.png'


</script>

