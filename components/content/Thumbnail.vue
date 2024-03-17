<template>
  <img :src="thumbnail" alt="" :class="className">
</template>

<script setup>
const { thumbnail, className } = defineProps(['thumbnail', 'className']);
</script>