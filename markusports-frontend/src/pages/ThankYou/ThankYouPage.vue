<template>
  <v-container class="thank-you-container">
    <v-row>
      <v-col cols="12" class="text-center">
        <v-icon size="x-large" color="green">mdi-check-circle</v-icon>
        <h1>Thank You for Your Purchase!</h1>
        <h2>Your order has been placed successfully.</h2>
        <p>Don't worry about giving us your shipping details, we use magic to
          deliver our products!</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <router-link to="/">
          <v-btn color="primary">Continue Shopping</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>

import {useCart} from "@/composables/useCart/useCart";
import {onMounted} from "vue";

const {deleteCart} = useCart()

onMounted(() => {
  deleteCart()
})

</script>
<style scoped>
.thank-you-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  text-align: center;
}

.text-center {
  text-align: center;
}

v-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
</style>

