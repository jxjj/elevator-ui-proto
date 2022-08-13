<template>
  <div
    class="drawer border border-blue-500 min-h-full flex min-w-0"
    :class="{
      'bg-neutral-100': color === 'light',
      'bg-neutral-300': color === 'gray',
      'bg-neutral-900': color === 'dark',
    }"
  >
    <header
      class="bg-white sideways flex gap-16 items-center justify-start p-4 whitespace-nowrap"
    >
      <div class="flex gap-4 items-center justify-start">
        <button class="bg-neutral-200 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rotate-180"
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
        </button>
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
    <div class="prose">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
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
