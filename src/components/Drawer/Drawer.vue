<template>
  <div
    class="drawer border-l-2 border-neutral-900 min-h-full flex min-w-0 max-w-md"
    :class="{
      'bg-neutral-100': color === 'light',
      'bg-neutral-300': color === 'gray',
      'bg-neutral-800 text-neutral-300': color === 'dark',
    }"
  >
    <header
      class="sideways flex gap-16 items-center justify-start p-4 whitespace-nowrap cursor-pointer bg-transparent-black-100"
      :class="{
        '': color === 'dark',
      }"
      aria-role="button"
      @click="isOpen = !isOpen"
    >
      <div class="flex gap-4 items-center justify-start">
        <div class="bg- rounded-full p-1">
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
        <h1 class="font-bold">{{ name }}</h1>
      </div>
      <ul class="text-sm flex content-center gap-8">
        <li>Unknown</li>
        <li>ca. 2nd century CE</li>
        <!-- <li>Washington, D.C., Freer Gallery</li> -->
        <!-- <li>Pakistani</li> -->
        <!-- <li>Carving</li> -->
      </ul>
    </header>
    <div
      v-if="isOpen"
      class="prose p-4 prose-neutral"
      :class="{
        'dark:prose-invert': color === 'dark',
      }"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

withDefaults(
  defineProps<{
    color: "light" | "dark" | "gray";
    name: string;
  }>(),
  {
    color: "gray",
  }
);

const isOpen = ref(false);
</script>
<style scoped></style>
