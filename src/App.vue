<template>
  <DefaultLayout>
    <ImageViewer />
    <Drawer color="dark">
      <DrawerSummmary>
        <h1>Object Details</h1>
      </DrawerSummmary>
      <DrawerDetails>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          doloremque, vel commodi maiores est, architecto quod quisquam quia
          repellat cupiditate nihil, unde libero dignissimos dolore earum
          numquam consequatur harum ullam.
        </p>
      </DrawerDetails>
    </Drawer>

    <Drawer color="light">
      <DrawerSummmary>
        <h1>Gandhara Life of the Buddha</h1>
      </DrawerSummmary>
      <DrawerDetails>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          doloremque, vel commodi maiores est, architecto quod quisquam quia
          repellat cupiditate nihil, unde libero dignissimos dolore earum
          numquam consequatur harum ullam.
        </p>
      </DrawerDetails>
    </Drawer>
  </DefaultLayout>
</template>
<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
import ImageViewer from "./components/ImageViewer.vue";
import Drawer from "./components/Drawer/Drawer.vue";
import DrawerSummmary from "./components/Drawer/DrawerSummary.vue";
import DrawerDetails from "./components/Drawer/DrawerDetails.vue";

defineProps<{
  message: string;
}>();
</script>

<style scoped></style>
