<template>
  <TheHeader />
  <div class="flex flex-col md:flex-row gap-8 justify-center md:mt-8 p-4">
    <NuxtLink to="/peintures" class="card bg-primary w-96 shadow-xl p-4">
      <figure class="w-full h-64 flex items-center justify-center">
        <NuxtImg
          src="/img/peintures/photo1.jpg"
          class="max-w-full max-h-full object-contain"
          alt="peinture"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Toutes les peintures</h2>
      </div>
    </NuxtLink>
    <NuxtLink to="/scultures" class="card bg-secondary w-96 shadow-xl p-4">
      <figure class="w-full h-64 flex items-center justify-center">
        <NuxtImg
          src="/img/scultures/sculture11.jpg"
          class="max-w-full max-h-full object-contain"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Toutes les scultures</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
