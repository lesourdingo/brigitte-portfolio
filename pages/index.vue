<script lang="ts" setup>
definePageMeta({
  layout: "home",
});
</script>

<template>
  <UContainer class="w-full py-4">
    <div
      class="mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-6 md:flex-row md:gap-10"
    >
      <NuxtLink to="/peintures" class="group flex flex-1 flex-col gap-3">
        <div
          class="flex h-40 items-center justify-center rounded-lg bg-elevated/40 p-3 sm:h-44 md:h-48 group-hover:bg-primary/5"
        >
          <NuxtImg
            src="/img/peintures/photo1.jpg"
            class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            alt="peinture"
          />
        </div>
        <p
          class="text-center text-sm font-bold text-muted group-hover:text-primary"
        >
          Toutes les peintures
        </p>
      </NuxtLink>

      <NuxtLink to="/scultures" class="group flex flex-1 flex-col gap-3">
        <div
          class="flex h-40 items-center justify-center rounded-lg bg-elevated/40 p-3 sm:h-44 md:h-48 group-hover:bg-primary/5"
        >
          <NuxtImg
            src="/img/scultures/sculture11.jpg"
            class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            alt="sculture"
          />
        </div>
        <p
          class="text-center text-sm font-bold text-muted group-hover:text-primary"
        >
          Toutes les scultures
        </p>
      </NuxtLink>
    </div>
  </UContainer>
</template>
