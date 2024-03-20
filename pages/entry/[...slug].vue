<template>
  <div class="max-w-none">
    <ContentDoc>
      <template #not-found>
        <NotFound />
      </template>
      <template v-slot="{ doc }">
        <CategoryTag :category="doc.category" className="mb-4" />
        <h1>{{ doc.title }}</h1>
        <Thumbnail :thumbnail="doc.thumbnail" className="mb-4" />
        <ContentRenderer :value="doc" />
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
const { addCustomMeta } = useCustomMeta();
addCustomMeta();
</script>