<template>
  <NuxtLink :to="link" :class="classList" :target="targetBlank ? '_blank' : ''" @click="toggleHandler"><slot /></NuxtLink>
</template>

<script setup>
const { targetBlank, toggleModal } = defineProps(['classList', 'link', 'targetBlank', 'toggleModal']);

const toggleHandler = () => !targetBlank && toggleModal();
</script>