<template>
  <DefaultLayout>
    <div class="min-h-0 sm:flex max-h-full">
      <div class="sm:flex-1 p-4 xs:py-8 sm:flex">
        <article
          class="flex gap-6 flex-col w-full max-w-2xl border border-neutral-300 rounded-lg mx-auto bg-white p-8 sm:p-16"
        >
          <SectionHeading class="!text-4xl">Frank Owen Gehry</SectionHeading>

          <Tuple label="Altnernate Name" variant="inline"
            >Frank O. Gehry; Frank Goldberg</Tuple
          >
          <Tuple label="Birth Date" variant="inline">1929</Tuple>
          <Tuple label="Country of Birth" variant="inline">Canada</Tuple>
          <Tuple label="Country Active" variant="inline">United States</Tuple>
          <Tuple label="Nationality" variant="inline">American, Canadian</Tuple>
        </article>
      </div>

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
        @toggle="isDrawerOpen.moreLikeThis = !isDrawerOpen.moreLikeThis"
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
import { reactive } from "vue";
import Drawer from "@/components/Drawer.vue";
import Tuple from "@/components/Tuple.vue";
import MediaCard from "@/components/MediaCard.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import SectionHeading from "@/components/SectionHeading.vue";

interface DrawerOpenState {
  moreLikeThis: boolean;
}
const isDrawerOpen = reactive<DrawerOpenState>({
  moreLikeThis: true,
});
</script>
