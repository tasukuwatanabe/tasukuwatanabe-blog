<template>
  <div
    @click="toggleModal"
    class="block md:hidden text-slate-700 dark:text-slate-200"
  >
    <Icon v-if="showModal" name="ic:baseline-close" size="2em" />
    <Icon v-else name="ic:baseline-menu" size="2em" />
  </div>
</template>

<script setup>
defineProps(['showModal', 'toggleModal']);
</script>