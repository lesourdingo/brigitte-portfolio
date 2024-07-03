<template>
  <TheHeader />
  <div class="flex flex-col md:flex-row gap-8 justify-center md:mt-8">
    <NuxtLink to="/peintures" class="card bg-base-100 w-96 shadow-xl p-4">
      <figure class="w-80 md:h-64">
        <img src="/img/peintures/photo1.jpg" height="250" alt="peinture" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Toutes les peintures</h2>
      </div>
    </NuxtLink>
    <NuxtLink to="/scultures" class="card bg-base-100 w-96 shadow-xl p-4">
      <figure class="w-80 md:h-64">
        <img src="/img/scultures/sculture11.jpg" height="250" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Toutes les scultures</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
