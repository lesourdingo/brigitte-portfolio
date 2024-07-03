<template>
  <TheHeader />
  <div class="p-4">
    <ContentList path="/scultures" v-slot="{ list }">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in list" :key="item._path">
          <ContentRenderer :value="item" />
        </div>
      </div>
    </ContentList>
  </div>
</template>
