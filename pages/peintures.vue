<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-2xl font-bold">
        Brigitte Rouxel
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal px-1 text-xl">
        <li>
          <NuxtLink to="/peintures" exact-active-class="active"
            >Peintures</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/scultures" exact-active-class="active"
            >Scultures</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink class="btn">Contact</NuxtLink>
    </div>
  </div>
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
