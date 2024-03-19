<template>
  <ContentDoc>
    <template #not-found>
      <NotFound />
    </template>
  </ContentDoc>
</template>

<script setup>
const url = useRequestURL();
useSeoMeta({
  ogUrl: url.href,
  twitterUrl: url.href
});

const route = useRoute();
const { data: entry } = await useAsyncData('entry', () => queryContent(route.path).findOne());

if (entry._value.thumbnail) {
  const thumbnailSrc = `${url.origin}${entry._value.thumbnail}`;

  useSeoMeta({
    ogImage: thumbnailSrc,
    twitterImage: thumbnailSrc
  });
}
</script>