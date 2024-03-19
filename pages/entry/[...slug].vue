<template>
  <div class="prose max-w-none">
    <ContentDoc>
      <template #not-found>
        <NotFound />
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
const { convertAbsoluteMeta } = useMeta();
convertAbsoluteMeta();
</script>