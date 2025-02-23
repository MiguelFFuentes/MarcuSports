<template>
  <v-app-bar color="primary" dark>
    <v-toolbar-title>MarcuSports - The shop you always trusted, now online!</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon :disabled="!cartId" @click="router.push('/cart')">
      <v-icon size="x-large">mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {useCart} from "@/composables/useCart/useCart";

const router = useRouter()
const {cartId} = useCart()

</script>

<style scoped>
.v-app-bar {
  background-color: #3f51b5; /* Customize your background color here */
}
</style>
