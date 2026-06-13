<template>
  <UContainer class="py-6">
    <MasonryWall
      v-if="list"
      :items="list"
      :ssr-columns="1"
      :column-width="330"
      :gap="16"
    >
      <template #default="{ item }">
        <div class="masonry-item">
          <ContentRenderer :value="item" />
        </div>
      </template>
    </MasonryWall>
  </UContainer>
</template>

<script lang="ts" setup>
import MasonryWall from "@yeger/vue-masonry-wall";

const { data: list } = await useAsyncData("peintures", () =>
  queryCollection("peintures").all(),
);
</script>
