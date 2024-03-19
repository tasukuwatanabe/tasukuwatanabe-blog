<template>
  <ContentDoc />
</template>

<script setup>
const { convertAbsoluteMeta } = useMeta();
convertAbsoluteMeta();
</script>