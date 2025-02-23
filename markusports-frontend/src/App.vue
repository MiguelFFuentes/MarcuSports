<template>
  <v-app>
    <v-main class="main-content">
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
<style scoped>
.main-content {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>
