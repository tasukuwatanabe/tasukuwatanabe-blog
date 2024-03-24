<template>
  <div class="min-h-screen flex flex-col">
    <Header :showModal="showModal" :toggleModal="toggleModal" />
    <main class="mt-16">
      <slot />
    </main>
  </div>
</template>
