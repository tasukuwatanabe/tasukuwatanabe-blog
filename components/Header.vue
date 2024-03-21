<template>
  <header
    class="grid-rows-subgrid bg-white dark:bg-slate-900 fixed left-0 right-0 z-10"
  >
    <div
      class="max-w-5xl mx-auto py-2 px-5 flex justify-between items-center h-16"
    >
      <NuxtLink to="/" class="flex items-center gap-x-3">
        <img
          src="~/assets/img/profile.jpg"
          class="w-10 h-10 rounded-full"
          alt="Tasuku Watanabe"
        />
        <h1 class="text-xl font-semibold">Tasuku Watanabe</h1>
      </NuxtLink>
      <div class="flex gap-5">
        <ColorMode />
        <HeaderModal :showModal="showModal" :toggleModal="toggleModal" />
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps(['showModal', 'toggleModal']);
</script>
