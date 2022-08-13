<template>
  <div class="default-layout">
    <main class="bg-neutral-200 flex-grow flex">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import UMNHeader from "../components/UMNHeader.vue";
import AppHeader from "../components/AppHeader.vue";
</script>

<style></style>
