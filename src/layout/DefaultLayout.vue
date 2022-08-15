<template>
  <div class="app default-layout h-screen flex flex-col box-border">
    <UMNHeader class="app__umn-header" />
    <AppHeader class="app__app-header" />
    <main class="flex-1 min-h-0">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import UMNHeader from "@/components/UMNHeader.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>
<style scoped></style>
