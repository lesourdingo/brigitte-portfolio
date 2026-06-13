<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Peintures",
    to: "/peintures",
    active: route.path.startsWith("/peintures"),
  },
  {
    label: "Scultures",
    to: "/scultures",
    active: route.path.startsWith("/scultures"),
  },
]);
</script>

<template>
  <UHeader title="Brigitte Rouxel">
    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        to="#contact"
        label="Contact"
        size="sm"
        variant="link"
        color="neutral"
        class="font-semibold text-muted hover:text-default"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        variant="link"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
