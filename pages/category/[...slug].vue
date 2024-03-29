<template>
  <ContentDoc>
    <template #not-found>
      <NotFound />
    </template>
    <template v-slot="{ doc }">
      <ContentRenderer :value="doc">
        <h1 class="text-2xl mb-4">カテゴリー : {{ doc.category }}</h1>
        <Posts :category="doc.category" />
      </ContentRenderer>
    </template>
  </ContentDoc>
</template>
