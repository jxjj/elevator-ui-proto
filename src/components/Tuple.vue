<template>
  <div
    class="tuple w-full"
    :class="{
      'max-w-lg grid grid-cols-3 justify-start items-baseline gap-4':
        variant === 'inline',
    }"
  >
    <span
      class="tuple__label text-xs block uppercase font-bold text-neutral-900 leading-none mb-1 tracking-wide"
      :class="{
        'text-right': variant === 'inline',
      }"
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
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
