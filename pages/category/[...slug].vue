<template>
  <ContentDoc>
    <template #not-found>
      <NotFound />
    </template>
  </ContentDoc>
</template>

<script setup>
const { addCustomMeta } = useCustomMeta();
addCustomMeta();
</script>