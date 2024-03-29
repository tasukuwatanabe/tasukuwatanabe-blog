<template>
  <ContentDoc>
    <template #not-found>
      <NotFound />
    </template>
    <template v-slot="{ doc }">
      <div>
        <CategoryTag :category="doc.category" className="mb-4" />
        <h1>{{ doc.title }}</h1>
        <Thumbnail :thumbnail="doc.thumbnail" className="mb-4" />
        <ContentRenderer :value="doc" />
      </div>
    </template>
  </ContentDoc>
</template>
