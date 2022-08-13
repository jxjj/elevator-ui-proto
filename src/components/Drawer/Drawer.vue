<template>
  <div
    class="drawer p-4"
    :class="{
      'bg-neutral-300': color === 'gray',
    }"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from "vue";
import { DrawerIsOpenKey, DrawerColorKey } from "@/shared/constants";
import { DrawerColor } from "@/shared/types";

const props = withDefaults(
  defineProps<{
    color: DrawerColor;
  }>(),
  {
    color: "gray",
  }
);

const isOpen = ref(false);

provide(DrawerIsOpenKey, isOpen);
provide(DrawerColorKey, props.color);
</script>
