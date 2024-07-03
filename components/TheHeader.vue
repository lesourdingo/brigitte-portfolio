<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink
        to="/"
        class="btn btn-ghost text-2xl font-semibold md:font-bold"
      >
        Brigitte Rouxel
      </NuxtLink>
    </div>
    <div class="navbar-center hidden md:block">
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
  <div class="flex justify-center md:hidden">
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
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
