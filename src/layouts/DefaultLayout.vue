<template>
  <div class="default-layout flex flex-col min-h-screen">
    <UMNHeader />
    <AppHeader />
    <main class="bg-neutral-50 flex-grow">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import UMNHeader from "../components/UMNHeader.vue";
import AppHeader from "../components/AppHeader.vue";
</script>
