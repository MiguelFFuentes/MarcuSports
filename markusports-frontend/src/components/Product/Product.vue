<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-img :src="product.image || DEFAULT_PRODUCT_IMAGE_URL" alt="Product Image"></v-img>
    </v-col>
    <v-col cols="12" md="8">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.description }}</v-card-subtitle>
            <v-card-text>
              <div>Price: ${{ product.price }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-for="part in product.parts" :key="part.id">
        <v-col cols="12">
          <v-select
            :items="part.options"
            :item-props="displayOptions"
            :label="'Select ' + part.name"
            v-model="cartProduct.selectedOptions[part.id]"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn :disabled="!allPartsSelected || disabled" @click="$emit('addToCart', cartProduct)" color="primary">Add to Cart
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>

import type {Product} from "@/models/Product";
import {ProductPartOption} from "@/models/ProductPartOption";
import {SelectedCartProduct} from "@/models/SelectedCartProduct";
import {computed, ref} from "vue";
import {DEFAULT_PRODUCT_IMAGE_URL} from "@/models/Product";

interface ProductProps {
  product: Product,
  disabled: boolean
}

const {product, disabled} = defineProps<ProductProps>()

const cartProduct = ref<SelectedCartProduct>(new SelectedCartProduct(product.id))

const displayOptions = ((option: ProductPartOption) => ({
  title: option.name,
  subtitle: option.stock > 0 ? `${option.stock} units available` : 'Out of stock',
  disabled: option.stock <= 0
}))

const allPartsSelected = computed(() => {
  return Object.values(cartProduct.value.selectedOptions).length === product.parts.length
})

</script>
