<template>
  <TheHeader />
  <UMain>
    <UContainer class="py-6">
      <div
        v-if="list"
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="item in list" :key="item.path">
          <ContentRenderer :value="item" />
        </div>
      </div>
    </UContainer>
  </UMain>
</template>

<script lang="ts" setup>
const { data: list } = await useAsyncData("scultures", () =>
  queryCollection("scultures").all(),
);
</script>
