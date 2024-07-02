<template>
  <div class="flex flex-wrap">
    <ContentList :path="path" v-slot="{ list }">
      <div v-for="item in list" :key="item._path" class="w-1/3 p-4">
        <ContentRenderer :value="item" />
      </div>
    </ContentList>
  </div>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>
