<template>
  <div class="app default-layout h-screen flex flex-col box-border">
    <UMNHeader class="app__umn-header" />
    <AppHeader class="app__app-header" />
    <main class="flex flex-1 min-h-0">
      <ImageViewer class="app__image-viewer flex flex-1">
        <img
          src="/gehry-residence.jpg"
          alt="Man Looking Out Window. Print by Robert Gwathmey."
          class="block object-cover w-full"
        />
      </ImageViewer>
      <Drawer class="app__drawer-1" color="dark" label="Object Details">
        <Tuple label="Type of View">Exterior</Tuple>
        <Tuple label="Keywords" class="flex gap-1 flex-wrap mt-2">
          <Chip
            href="https://elevator-dcl-weisman.s3.amazonaws.com/thumbnail/0064b8e41f1dbb184e0c3e65-tiny2x"
          >
            Postmodern
          </Chip>
          <Chip
            href="https://dcl.elevator.umn.edu/search/querySearch/Santa%20Monica"
          >
            Santa Monica
          </Chip>
          <Chip
            href="https://dcl.elevator.umn.edu/search/querySearch/Deconstructivist"
          >
            Deconstructivist
          </Chip>
          <Chip
            href="https://elevator-dcl-weisman.s3.amazonaws.com/thumbnail/0064b8e41f1dbb184e0c3e65-tiny2x"
          >
            Another Keyword
          </Chip>
        </Tuple>
        <Tuple label="Date of Photo">1991</Tuple>
        <Tuple label="Source">
          <Accordion label="Original Slide provided by John Archer">
            <Tuple label="Title">
              Image (original slide) provided by John Archer
            </Tuple>
            <Tuple label="Format">original slide</Tuple>
          </Accordion>
        </Tuple>
        <Tuple label="Copyright Status" />
        <Tuple label="File">
          <ThumbnailImage
            src="/gehry-residence.jpg"
            alt="Frank Gehry Residence thumbnail image"
            href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
          />
        </Tuple>
        <Tuple label="Media Type">image</Tuple>
        <Tuple label="Digital ID">CSCL001875</Tuple>
      </Drawer>

      <Drawer class="app__drawer-2" color="light" label="Gehry Residence">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          doloremque, vel commodi maiores est, architecto quod quisquam quia
          repellat cupiditate nihil, unde libero dignissimos dolore earum
          numquam consequatur harum ullam.
        </p>
      </Drawer>
      <Drawer class="app__drawer-3" color="gray" label="More Like This">
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
import Drawer from "./components/Drawer.vue";
import Tuple from "./components/Tuple.vue";
import Chip from "./components/Chip.vue";
import Accordion from "./components/Accordion.vue";
import ThumbnailImage from "./components/ThumbnailImage.vue";
</script>

<style>
.app__image-viewer {
  min-width: 25vw;
}
</style>
