<template>
  <div class="app default-layout h-screen flex flex-col box-border">
    <UMNHeader class="app__umn-header" />
    <AppHeader class="app__app-header" />
    <main class="flex flex-1 min-h-0 border-4 border-red-700">
      <ImageViewer class="app__image-viewer flex">
        <img
          src="/buddha.jpg"
          alt="Tian Tan Buddha, Hong Kong"
          class="block object-cover w-full"
        />
      </ImageViewer>
      <Drawer
        class="app__drawer-1"
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
/* .default-layout {
  height: 100vh;
  display: grid;
  grid-template-areas:
    "umn-header umn-header umn-header umn-header"
    "app-header app-header app-header app-header"
    "viewer drawer-1 drawer-2 drawer-3";
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-template-rows: min-content min-content minmax(0, 1fr);
}

.app__umn-header {
  grid-area: umn-header;
}

.app__app-header {
  grid-area: app-header;
}

.app__image-viewer {
  grid-area: viewer;
}

.app__drawer-1 {
  grid-area: drawer-1;
}

.app__drawer-2 {
  grid-area: drawer-2;
}

.app__drawer-3 {
  grid-area: drawer-3;
} */
</style>
