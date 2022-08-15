<template>
  <div class="app-header bg-neutral-100 border-y border-neutral-200">
    <div class="flex justify-between max-w-[90rem] mx-auto p-4 items-center">
      <h2 class="text-xl">
        <router-link to="/" class="text-neutral-800">Elevator</router-link>
      </h2>
      <nav>
        <ul class="flex gap-2">
          <li>
            <RouterLink to="/" class="p-4">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/viewer" class="p-4">Viewer</RouterLink>
          </li>
          <li>
            <a href="#" class="p-4">Link</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
