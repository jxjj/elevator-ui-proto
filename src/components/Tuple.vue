<template>
  <div
    class="tuple w-full"
    :class="{
      'grid grid-cols-3 justify-start items-baseline': variant === 'inline',
    }"
  >
    <span
      class="tuple__label text-xs block uppercase text-neutral-500 leading-none mb-1"
      >{{ label }}</span
    >
    <span
      class="tuple__value block"
      :class="{
        'col-span-2': variant === 'inline',
      }"
      v-bind="$attrs"
    >
      <slot> - </slot>
    </span>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    variant?: "stacked" | "inline";
  }>(),
  {
    variant: "stacked",
  }
);
</script>
<script lang="ts">
// use normal <script> to declare options
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
