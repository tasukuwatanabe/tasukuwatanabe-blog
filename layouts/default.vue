<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="grid-rows-subgrid border-b bg-white fixed left-0 right-0 z-10"
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
          <h1 class="text-l font-semibold">Tasuku Watanabe</h1>
        </NuxtLink>
        <div @click="toggleModal" class="block md:hidden text-slate-700">
          <Icon v-if="showModal" name="ic:baseline-close" size="2em" />
          <Icon v-else name="ic:baseline-menu" size="2em" />
        </div>
      </div>
    </header>
    <div class="mt-16">
      <main class="bg-slate-100">
        <div v-if="showModal" class="fixed t-16 w-full h-full bg-white py-10 px-7">
          <NavMenu />
        </div>
        <div class="max-w-5xl mx-auto py-12 px-5 grid md:grid-cols-baseLayout gap-4 min-h-screenMinusHeader">
          <div class="hidden md:block">
            <div class="fixed">
              <NavMenu />
            </div>
          </div>
          <div>
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(false);
const toggleModal = () => showModal.value = !showModal.value;
</script>