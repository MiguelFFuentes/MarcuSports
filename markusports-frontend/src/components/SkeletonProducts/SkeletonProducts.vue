<template>
  <v-col cols="12" sm="6" md="4" lg="3" v-for="index in productsCount" :key="index">
    <v-skeleton-loader type="card"></v-skeleton-loader>
  </v-col>
</template>

<script lang="ts" setup>
interface LoadingProductsProps {
  productsCount: number
}
const {productsCount} = defineProps<LoadingProductsProps>()

</script>

