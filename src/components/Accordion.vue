<template>
  <div
    class="accordion shadow-sm rounded-md overflow-hidden bg-neutral-100 border border-neutral-100 w-full"
  >
    <IconButton
      class="accordion__header flex w-full justify-start items-center p-4 gap-2 flex-row-reverse bg-neutral-200"
      label="expand more"
      icon="expand_more"
      @click="isOpen = !isOpen"
    >
      <span class="flex-1 block text-left">{{ label }}</span>
    </IconButton>
    <div
      v-if="isOpen"
      class="accordion__panel px-4 py-2 border-t border-neutral-200"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import IconButton from "./IconButton.vue";
withDefaults(
  defineProps<{
    label: string;
    color?: "light" | "dark";
  }>(),
  {
    color: "light",
    label: "-",
  }
);

const isOpen = ref(false);
</script>
<style scoped></style>
