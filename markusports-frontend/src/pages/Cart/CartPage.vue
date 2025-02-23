<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <router-link to="/">
          <v-btn color="secondary">Back</v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="9">
        <v-row>
          <SkeletonProducts v-if="loading && !error" :products-count="6"/>
          <Error v-if="error" :error="error"/>
          <template v-if="cart && cart.products">
            <v-col cols="12" class="text-center">
              <h2>You have {{ cart.products.length }} products in your cart</h2>
            </v-col>
            <v-col cols="12" md="4" v-for="product in cart.products" :key="product.id" class="mb-4">
              <CartProduct :product="product"/>
            </v-col>
          </template>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title>Total Price: {{ totalPrice }} €</v-card-title>
          <v-card-actions>
            <router-link to="/thanks">
              <v-btn color="primary">Checkout</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {useCartProducts} from "@/composables/useCartProducts/useCartProducts";
import Error from "@/components/AlertError/AlertError.vue";
import SkeletonProducts from "@/components/SkeletonProducts/SkeletonProducts.vue";
import CartProduct from "@/components/CartProduct/CartProduct.vue";

const {cart, totalPrice, loading, error} = useCartProducts()
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
