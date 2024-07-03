<template>
  <TheHeader />
  <div class="p-4">
    <ContentList path="/peintures" v-slot="{ list }">
      <MasonryWall :items="list" :ssr-columns="1" :column-width="330" :gap="16">
        <template #default="{ item }">
          <div class="masonry-item">
            <ContentRenderer :value="item" />
          </div>
        </template>
      </MasonryWall>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
import MasonryWall from "@yeger/vue-masonry-wall";
</script>
