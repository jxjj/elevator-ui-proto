<template>
  <div class="image-viewer relative">
    <slot />
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 w-full">
      <ImageViewerToolbar />
    </div>
  </div>
</template>
<script setup lang="ts">
import ImageViewerToolbar from "./ImageViewerToolbar.vue";
</script>
