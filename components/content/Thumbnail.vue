<template>
  <img :src="thumbnail" alt="" :class="className">
</template>

<script setup>
defineProps(['thumbnail', 'className']);
</script>