<template>
  <div class="app-header p-4 bg-neutral-100">
    <div class="container mx-auto flex justify-between">
      <h2 class="text-xl">Elevator</h2>
      <nav>
        <ul class="flex gap-4">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/viewer">Viewer</RouterLink>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
