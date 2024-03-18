<template>
  <NuxtLayout>
    <NotFound v-if="error.statusCode === 404" />
    <div v-else>
      <h1 class="text-xl mb-4">エラーが発生しました</h1>
      <p class="mb-4">{{ error.statusMessage }} ({{ error.statusCode }})</p>
      <BackToTop />
    </div>
  </NuxtLayout>
</template>

<script setup>
defineProps({ error: Object });
</script>
