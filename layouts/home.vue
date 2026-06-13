<template>
  <div class="grid h-dvh grid-rows-[auto_1fr_auto]">
    <TheHeader />
    <main class="flex min-h-0 items-center overflow-y-auto">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
