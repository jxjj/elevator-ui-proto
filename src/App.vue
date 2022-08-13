<template>
  <div class="app default-layout h-screen flex flex-col box-border">
    <UMNHeader class="app__umn-header" />
    <AppHeader class="app__app-header" />
    <main class="flex flex-1 min-h-0">
      <ImageViewer class="app__image-viewer flex flex-1">
        <img
          src="/buddha.jpg"
          alt="Tian Tan Buddha, Hong Kong"
          class="block object-cover w-full"
        />
      </ImageViewer>
      <Drawer
        class="app__drawer-1"
        color="dark"
        name="Gandhara Life of the Buddha"
      >
        <h1>Gandhara Life of the Buddha</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          doloremque, vel commodi maiores est, architecto quod quisquam quia
          repellat cupiditate nihil, unde libero dignissimos dolore earum
          numquam consequatur harum ullam.
        </p>
      </Drawer>
      <Drawer
        class="app__drawer-2"
        color="light"
        name="Gandhara Life of the Buddha"
      >
        <h1>Gandhara Life of the Buddha</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          doloremque, vel commodi maiores est, architecto quod quisquam quia
          repellat cupiditate nihil, unde libero dignissimos dolore earum
          numquam consequatur harum ullam.
        </p>
      </Drawer>
      <Drawer
        class="app__drawer-3"
        color="gray"
        name="Gandhara Life of the Buddha"
      >
        <h1>Gandhara Life of the Buddha</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          doloremque, vel commodi maiores est, architecto quod quisquam quia
          repellat cupiditate nihil, unde libero dignissimos dolore earum
          numquam consequatur harum ullam.
        </p>
      </Drawer>
    </main>
  </div>
</template>
<script setup lang="ts">
import UMNHeader from "./components/UMNHeader.vue";
import AppHeader from "./components/AppHeader.vue";
import ImageViewer from "./components/ImageViewer.vue";
import Drawer from "./components/Drawer/Drawer.vue";

defineProps<{}>();
</script>

<style>
.app__image-viewer {
  min-width: 25vw;
}
</style>
