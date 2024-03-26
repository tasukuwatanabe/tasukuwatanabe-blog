<template>
  <div class="not-prose">
    <p class="mb-4" v-if="!level">目次</p>
    <ul>
      <li v-for="link of links" :key="link.id">
        <NuxtLink
          :to="{ path: route.path, hash: `#${link.id}` }"
          :class="{ 'ml-3': level, 'text-sky-500': activeId === link.id }">
          {{ link.text }}
        </NuxtLink>
        <TocLinks :links="link.children" :level="level + 1" :active-id="activeId" />
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
    default: 0,
  },
  activeId: {
    type: String,
    default: null,
  },
});
</script>
