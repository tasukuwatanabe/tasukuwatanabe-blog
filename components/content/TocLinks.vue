<template>
  <div class="not-prose">
    <p class="mb-4" v-if="!level">目次</p>
    <ul>
      <li v-for="link of links" :key="link.id">
        <NuxtLink :to="{ path: route.path, hash: `#${link.id}`}" :class="{ 'ml-3': level }">{{ link.text }}</NuxtLink>
        <TocLinks :links="link.children" :level="level + 1" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  }
})
</script>