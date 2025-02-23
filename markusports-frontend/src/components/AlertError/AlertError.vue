<template>
  <v-col cols="12" v-if="error">
    <v-alert type="error">{{ error.message }}</v-alert>
  </v-col>
</template>

<script lang="ts" setup>
defineProps<{error: Error | undefined}>()
</script>

