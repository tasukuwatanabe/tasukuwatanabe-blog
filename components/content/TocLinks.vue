<template>
  <div>
    <p class="mt-0">目次</p>
    <div v-for="link of tocLinks" :key="link.id">
      {{ link.text }}
    </div>
  </div>
</template>

<script setup>
defineProps(['tocLinks'])
</script>