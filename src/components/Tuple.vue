<template>
  <div class="tuple mb-6 mt-4">
    <span
      class="tuple__label text-xs block uppercase text-neutral-500 leading-none mb-1"
      >{{ label }}</span
    >
    <span class="tuple__value block" v-bind="$attrs">
      <slot> - </slot>
    </span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
<script lang="ts">
// use normal <script> to declare options
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
