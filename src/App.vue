<template>
  <DefaultLayout>
    <h1>Hello World</h1>
  </DefaultLayout>
</template>
<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";

defineProps<{
  message: string;
}>();
</script>

<style scoped></style>
