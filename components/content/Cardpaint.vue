<template>
  <div>
    <img
      :src="imageSrc"
      :alt="title"
      class="border-solid border-black border-8"
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

<style></style>
