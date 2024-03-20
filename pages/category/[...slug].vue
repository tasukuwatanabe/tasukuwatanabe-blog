<template>
  <ContentDoc>
    <template #not-found>
      <NotFound />
    </template>
    <template v-slot="{ doc }">
      <ContentRenderer :value="doc">
        <h1 class="text-xl mb-4">カテゴリー : {{ doc.title }}</h1>
        <Posts :category="doc.category" />
      </ContentRenderer>
    </template>
  </ContentDoc>
</template>

<script setup>
const { addCustomMeta } = useCustomMeta();
addCustomMeta();
</script>
