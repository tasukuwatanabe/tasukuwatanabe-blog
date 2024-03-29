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

<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(() =>
  queryContent(route.path).findOne()
);

const runtimeConfig = useRuntimeConfig();

(function () {
  if (!post) return;
  useSeoMeta({
    canonical: `${runtimeConfig.public.siteUrl}${route.path}`,
    ogDescription: post.value.description,
    ogUrl: `${runtimeConfig.public.siteUrl}${route.path}`,
    ogImage: `${runtimeConfig.public.siteUrl}${post.value.thumbnail}`,
    twitterTitle: post.value.title,
    twitterDescription: post.value.description,
    twitterImage: `${runtimeConfig.public.siteUrl}${post.value.thumbnail}`,
  });
})(post);
</script>