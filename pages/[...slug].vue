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

<script setup>
import { withoutTrailingSlash } from 'ufo';

const fetchPost = async (path) => {
  const { data: post } = await useAsyncData(() =>
    queryContent(path).findOne()
  );

  return post;
}

const route = useRoute();
const post = await fetchPost(route.path);

if (post) {
  const pathWithoutSlash = withoutTrailingSlash(route.path);
  const formattedPath = pathWithoutSlash === '/' ? '' : pathWithoutSlash;
  const runtimeConfig = useRuntimeConfig();
  const siteUrlWithoutSlash = withoutTrailingSlash(runtimeConfig.public.siteUrl);

  useSeoMeta({
    canonical: `${siteUrlWithoutSlash}${formattedPath}`,
    ogDescription: post.value.description,
    ogUrl: `${siteUrlWithoutSlash}${formattedPath}`,
    ogImage: `${siteUrlWithoutSlash}${post.value.thumbnail}`,
    twitterTitle: post.value.title,
    twitterDescription: post.value.description,
    twitterImage: `${siteUrlWithoutSlash}${post.value.thumbnail}`,
  });
}
</script>