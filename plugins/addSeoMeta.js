import { withoutTrailingSlash } from 'ufo';

export default defineNuxtPlugin(async () => {
  const fetchPost = async (path) => {
    const { data: post } = await useAsyncData(() => queryContent(path).findOne());
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
      titleTemplate: title => title && route.path !== '/' ? `${title} | 渡邉佑ポートフォリオサイト` : title,
      ogDescription: post.value.description,
      ogUrl: `${siteUrlWithoutSlash}${formattedPath}`,
      ogImage: `${siteUrlWithoutSlash}${post.value.thumbnail}`,
      twitterTitle: post.value.title,
      twitterDescription: post.value.description,
      twitterImage: `${siteUrlWithoutSlash}${post.value.thumbnail}`,
    });
  }
});