<template>
  <div
    class="mx-auto py-12 px-5 grid md:grid-cols-baseLayout gap-4 min-h-screenMinusHeader"
  >
    <ContentDoc>
      <template #not-found>
        <div class="hidden md:block">
          <div class="fixed">
            <NavMenu />
          </div>
        </div>
        <NotFound />
      </template>
      <template v-slot="{ doc }">
        <div class="hidden md:block">
          <div class="fixed">
            <TocLinks v-if="doc.body.toc" :links="doc.body.toc.links" :active-id="activeId" />
            <NavMenu v-else />
          </div>
        </div>
        <div>
          <CategoryTag :category="doc.category" className="mb-4" />
          <h1>{{ doc.title }}</h1>
          <Thumbnail :thumbnail="doc.thumbnail" className="mb-4" />
          <ContentRenderer :value="doc" />
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
const { addCustomMeta } = useCustomMeta();
addCustomMeta();

definePageMeta({
  layout: 'entry',
});

const activeId = ref(null);
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
      }
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });
  const elements = document.querySelectorAll(['h2', 'h3']);

  for (const element of elements) {
    observer.observe(element);
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
