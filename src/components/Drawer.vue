<template>
  <div
    class="drawer border-l-2 border-neutral-900 min-h-full flex max-w-[25%]"
    :class="{
      'bg-neutral-50': color === 'light',
      'bg-neutral-300': color === 'gray',
      'drawer--color-dark bg-neutral-800': color === 'dark',
    }"
  >
    <header
      class="sideways flex gap-4 items-center justify-start p-2 whitespace-nowrap cursor-pointer bg-transparent-black-100"
      :class="{
        invert: color === 'dark',
      }"
      aria-role="button"
      @click="isOpen = !isOpen"
    >
      <div class="flex gap-4 items-center justify-start">
        <div class="rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            :class="{
              'rotate-180': isOpen,
            }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <h1 class="font-bold">
          {{ label }}
        </h1>
      </div>
      <ul
        v-if="details"
        class="text-sm flex content-center gap-4 text-neutral-500 overflow-hidden"
        :class="{
          hidden: isOpen,
        }"
      >
        <li v-for="(item, i) in details" :key="i">
          {{ item }}
        </li>
      </ul>
    </header>

    <article
      v-if="isOpen"
      class="p-4 overflow-y-auto w-full"
      :class="{
        invert: color === 'dark',
      }"
    >
      <h1
        class="mt-8 text-3xl font-bold mb-12 text-neutral-900 relative before:block before:w-12 before:h-2 before:bg-neutral-900 before:absolute before:bottom-0 pb-8"
        :class="{
          'text-lg before:hidden mt-0 mb-2': size === 'xs',
        }"
      >
        {{ label }}
      </h1>
      <div class="text-neutral-600 flex flex-col gap-8">
        <slot />
      </div>
    </article>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

withDefaults(
  defineProps<{
    color: "light" | "dark" | "gray";
    label: string;
    details?: string[];
    size?: "xs" | "sm" | "md" | "lg";
  }>(),
  {
    color: "gray",
    details: () => [],
    size: "sm",
  }
);

const isOpen = ref(false);
</script>
<style>
.drawer--color-dark img {
  filter: invert(1);
}
</style>
