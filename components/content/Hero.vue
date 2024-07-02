<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-2xl font-bold">
        <slot />
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
      <a class="btn">Contact</a>
    </div>
  </div>
</template>
