<template>
  <DefaultLayout ref="mainEl">
    <div class="min-h-0 sm:flex max-h-full">
      <ImageViewer class="app__image-viewer sm:flex sm:flex-1 min-w-[25%]">
        <img
          src="/gehry-residence.jpg"
          alt="Gehry Residence"
          class="block object-cover w-full"
        />
      </ImageViewer>
      <Drawer
        label="Object Details"
        :details="['Exterior', '1991', 'image', 'CSCL001875']"
        color="dark"
        :is-open="isDrawerOpen.objectDetails"
        @toggle="toggleDrawer('objectDetails')"
      >
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
            class="relative"
          >
            <IconButton
              icon="download"
              label="Download Image"
              class="absolute bottom-0 right-0 z-10"
              @click="downloadImage"
            />
          </ThumbnailImage>
        </Tuple>
        <Tuple label="Media Type">image</Tuple>
        <Tuple label="Digital ID">CSCL001875</Tuple>
      </Drawer>

      <Drawer
        label="Gehry Residence"
        :details="[
          'Frank Owen Gehry',
          '1977',
          'Western: North America : North America : United States: 1945-Present : 1980s',
        ]"
        color="light"
        :is-open="isDrawerOpen.primary"
        @toggle="toggleDrawer('primary')"
      >
        <Tuple label="Creator">
          <Accordion label="Frank Owen Gehry">
            <Tuple label="Agent"></Tuple>
            <Tuple label="Display Name">
              <a
                href="https://dcl.elevator.umn.edu/search/querySearch/Frank%20Owen%20Gehry"
                >Frank Owen Gehry</a
              >
            </Tuple>
            <Tuple label="Altnernate Name"
              >Frank O. Gehry; Frank Goldberg</Tuple
            >
            <Tuple label="Birth Date">1929</Tuple>
            <Tuple label="Country of Birth">Canada</Tuple>
            <Tuple label="Country Active">United States</Tuple>
            <Tuple label="Nationality">American, Canadian</Tuple>
            <Tuple label="Role">Architect</Tuple>
          </Accordion>
        </Tuple>

        <Tuple label="Date / Location">
          <Accordion label="1977">
            <Tuple label="Type">Construction</Tuple>
            <Tuple label="Earliest Date">1977</Tuple>
            <Tuple label="Latest Date">1994</Tuple>
            <Tuple label="Begin Century">20th century CE</Tuple>
            <Tuple label="End Century">20th century CE</Tuple>
            <Tuple label="Greater Location">
              North and Central America : North America : United States :
              California
            </Tuple>
            <Tuple label="City Site">Santa Monica</Tuple>
            <Tuple label="Address">
              <a href="#">1002 22nd Street, Santa Monica, California 90403</a>
            </Tuple>
            <Tuple label="Location">
              <iframe
                title="Map of Frank Gehry Residence"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.338303777535!2d-118.48692148442593!3d34.03519208061066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb4ce64c44a9%3A0x363af92fd8aa810a!2sGehry%20Residence%2C%201002%2022nd%20St%2C%20Santa%20Monica%2C%20CA%2090403!5e0!3m2!1sen!2sus!4v1660426179610!5m2!1sen!2sus"
                width="400"
                height="300"
                style="border: 0"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Tuple>
          </Accordion>
        </Tuple>
        <Tuple label="Style Period">
          Western: North America : North America : United States: 1945-Present :
          1980s
        </Tuple>
        <Tuple label="Culture"> American </Tuple>
        <Tuple label="Classification">Architecture : Dwellings : houses</Tuple>
        <Tuple label="Views">
          <div class="grid grid-cols-2 gap-2 items-center justify-start">
            <ThumbnailImage
              src="/gehry-residence.jpg"
              alt="Frank Gehry Residence thumbnail image"
              href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            />
            <ThumbnailImage
              src="/gehry-residence.jpg"
              alt="Frank Gehry Residence thumbnail image"
              href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            />
            <ThumbnailImage
              src="/gehry-residence.jpg"
              alt="Frank Gehry Residence thumbnail image"
              href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            />
            <ThumbnailImage
              src="/gehry-residence.jpg"
              alt="Frank Gehry Residence thumbnail image"
              href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            />
            <ThumbnailImage
              src="/gehry-residence.jpg"
              alt="Frank Gehry Residence thumbnail image"
              href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            />
            <ThumbnailImage
              src="/gehry-residence.jpg"
              alt="Frank Gehry Residence thumbnail image"
              href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            />
            <ThumbnailImage
              src="/gehry-residence.jpg"
              alt="Frank Gehry Residence thumbnail image"
              href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            />
          </div>
        </Tuple>
        <Tuple label="Collection">
          Cultural Studies & Comparative Literature Open Collection
        </Tuple>
      </Drawer>
      <Drawer
        label="More Like This"
        :details="[
          'Loyola Law School',
          'California Aerospace Museum and Theater',
          'Indiana Avenue Houses',
          'Frances Howard Goldwyn - Hollywood Regional Library',
        ]"
        color="gray"
        size="sm"
        :is-open="isDrawerOpen.moreLikeThis"
        @toggle="toggleDrawer('moreLikeThis')"
      >
        <div class="flex flex-col gap-2">
          <MediaCard
            label="Loyola Law School"
            image="/loyola-law-school.jpg"
            href="https://dcl.elevator.umn.edu/asset/viewAsset/57e31b217d58ae5d4ce734f3#57e31c447d58ae793de734fa"
            :details="[
              'Frank Owen Gehry',
              '1978',
              'Architecture, Cultural / Educational, colleges / universities',
            ]"
          />
          <MediaCard
            label="California Aerospace Museum and Theater"
            image="/cal-aero-museum.jpg"
            href="#"
            :details="[
              'Frank Owen Gehry',
              '1982',
              'Architecture, Cultural / Educational, museums',
            ]"
          />
        </div>
      </Drawer>
    </div>
  </DefaultLayout>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useResizeObserver } from "@vueuse/core";
import UMNHeader from "@/components/UMNHeader.vue";
import AppHeader from "@/components/AppHeader.vue";
import ImageViewer from "@/components/ImageViewer.vue";
import Drawer from "@/components/Drawer.vue";
import Tuple from "@/components/Tuple.vue";
import Chip from "@/components/Chip.vue";
import Accordion from "@/components/Accordion.vue";
import ThumbnailImage from "@/components/ThumbnailImage.vue";
import IconButton from "@/components/IconButton.vue";
import MediaCard from "@/components/MediaCard.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";

function downloadImage(event: MouseEvent) {
  console.log("download");
}

interface DrawerOpenState {
  objectDetails: boolean;
  moreLikeThis: boolean;
  primary: boolean;
}
const isDrawerOpen = reactive<DrawerOpenState>({
  moreLikeThis: false,
  primary: false,
  objectDetails: false,
});

const mainEl = ref<HTMLElement | null>(null);
const maxOpenDrawers = ref(3);
useResizeObserver(mainEl, (entries) => {
  console.log("resize");
  const entry = entries[0];
  const { width } = entry.contentRect;

  if (width >= 1024) {
    maxOpenDrawers.value = 3;
    return;
  }

  maxOpenDrawers.value = 1;
  const openDrawerKeys = getOpenDrawerKeys();
  if (openDrawerKeys.length > maxOpenDrawers.value) {
    // close all open drawers but the first one
    openDrawerKeys.slice(1).forEach((key) => {
      isDrawerOpen[key as keyof DrawerOpenState] = false;
    });
  }
});

function getOpenDrawerKeys() {
  return Object.keys(isDrawerOpen).filter(
    (key) => isDrawerOpen[key as keyof DrawerOpenState]
  );
}

function toggleDrawer(drawer: keyof DrawerOpenState) {
  if (isDrawerOpen[drawer]) {
    isDrawerOpen[drawer] = false;
    return;
  }

  const openDrawers = getOpenDrawerKeys();

  // if we're already at max drawers, we shut another open one first
  if (openDrawers.length >= maxOpenDrawers.value) {
    isDrawerOpen[openDrawers[0] as keyof DrawerOpenState] = false;
  }
  isDrawerOpen[drawer] = true;
}
</script>
