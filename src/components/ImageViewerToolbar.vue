<template>
  <div
    class="toolbar bg-transparent-black-600 px-6 py-4 rounded-lg text-neutral-400 shadow-lg flex flex-col gap-2 max-w-lg w-full min-w-fit m-auto backdrop-blur-sm"
  >
    <div class="toolbar__primary flex gap-4 items-center justify-center">
      <h1 class="text-neutral-300 font-bold">Gehry Residence</h1>
    </div>
    <div class="toolbar__secondary flex gap-2 items-center justify-center">
      <IconButton
        href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
        label="More Info"
        icon="info"
        class="text-neutral-400"
      ></IconButton>
      <IconButton label="Download" icon="download" />
      <IconButton label="Share" icon="google_plus_reshare" />
      <IconButton label="Open in Lightbox" icon="open_in_full" />
      <input
        id="default-range"
        type="range"
        value="50"
        class="flex-1 h-1 bg-neutral-400 w-1/2 rounded-lg appearance-none cursor-pointer"
      />
      <IconButton label="Open in Fullscreen" icon="fullscreen" />
    </div>
  </div>
</template>
<script setup lang="ts">
import IconButton from "./IconButton.vue";
</script>
