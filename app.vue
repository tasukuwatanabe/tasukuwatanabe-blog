<template>
  <NuxtLayout>
    <div class="prose dark:prose-invert dark:prose-pre:bg-slate-700 max-w-none">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
html {
  font-size: 14px;
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>

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