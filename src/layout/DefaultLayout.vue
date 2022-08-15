<template>
  <div
    class="app default-layout h-screen flex flex-col box-border bg-neutral-50"
  >
    <UniversityHeader class="umn-header border-t-[6px] border-umn-gold" />
    <AppHeader />
    <!-- <AppHeader class="app__app-header" /> -->
    <main class="flex-1 min-h-0">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import UniversityHeader from "@/cla-vue-template/src/components/UniversityHeader.vue";
import AppHeader from "@/components/AppHeader.vue";
import "../cla-vue-template/src/index.css";
</script>
