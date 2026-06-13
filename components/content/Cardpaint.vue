<template>
  <div>
    <NuxtImg
      :src="imageSrc"
      :alt="title"
      class="w-full"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
