<template>
  <div class="min-h-screen flex flex-col">
    <Header :showModal="showModal" :toggleModal="toggleModal" />
    <div class="mt-16">
      <main>
        <div v-if="showModal" class="fixed t-16 w-full h-full py-10 px-7 bg-white dark:bg-slate-900">
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

<style>
html {
  font-size: 14px;
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>