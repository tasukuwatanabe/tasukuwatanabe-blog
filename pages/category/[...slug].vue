<template>
  <ContentDoc>
    <template #not-found>
      <NotFound />
    </template>
  </ContentDoc>
</template>

<script setup>
const { convertAbsoluteMeta } = useMeta();
convertAbsoluteMeta();
</script>