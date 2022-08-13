<template>
  <div class="app-header p-4 bg-neutral-100">
    <div class="container mx-auto flex justify-between">
      <h2 class="text-xl">Elevator</h2>
      <nav>
        <ul class="flex gap-4">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
