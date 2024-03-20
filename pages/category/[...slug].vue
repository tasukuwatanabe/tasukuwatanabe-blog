<template>
  <ContentDoc>
    <template #not-found>
      <NotFound />
    </template>
    <template v-slot="{ doc }">
      <ContentRenderer :value="doc">
        <div class="prose">
          <h1 class="text-xl mb-4">カテゴリー : {{ doc.title }}</h1>
        </div>
        <Posts :category="doc.category" />
      </ContentRenderer>
    </template>
  </ContentDoc>
</template>

<script setup>
const { addCustomMeta } = useCustomMeta();
addCustomMeta();
</script>
