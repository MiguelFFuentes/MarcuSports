<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Product Details</h1>
      </v-col>
      <v-row>
        <v-col cols="12">

          <router-link to="/">
            <v-btn color="secondary">Back</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-row>
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else-if="error">
      <v-col cols="12">
        <v-alert type="error">{{ error.message }}</v-alert>
      </v-col>
    </v-row>
    <Product v-else :product="product" @addToCart="addToCart($event)" :disabled="cartLoading"/>
    <AlertError :error="cartError"/>
  </v-container>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'
import {useProduct} from '@/composables/useProduct/useProduct'
import Product from "@/components/Product/Product.vue"
import AlertError from "@/components/AlertError/AlertError.vue"
import {useCart} from "@/composables/useCart/useCart";

const route = useRoute()

const productId = parseInt(route.params.id as string)

const {product, loading, error} = useProduct(productId)

const {addToCart, cartError, cartLoading} = useCart()

</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
