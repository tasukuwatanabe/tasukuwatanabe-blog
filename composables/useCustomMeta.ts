export const useCustomMeta = () => {
  const addOgUrl = (pageUrl: string) => {
    useSeoMeta({
      ogUrl: pageUrl
    });
  };

  const addImage = (thumbnailUrl: string) => {
    useSeoMeta({
      ogImage: thumbnailUrl,
      twitterImage: thumbnailUrl,
    });
  };

  const getFullThumbnailUrl = async (origin: string) => {
    const route = useRoute();
    const { data: entry } = await useAsyncData('entry',
      () => queryContent(route.path).only(['thumbnail']).findOne()
    );

    let thumbnailUrl;
    if (entry.value && entry.value.thumbnail) {
       thumbnailUrl = `${origin}${entry.value.thumbnail}`;
    }

    return thumbnailUrl;
  }

  const addCustomMeta = async () => {
    const url = useRequestURL();
    addOgUrl(url.href);

    const fullThumbnailUrl = await getFullThumbnailUrl(url.origin);
    if (fullThumbnailUrl) addImage(fullThumbnailUrl);
  };

  return { addCustomMeta };
};
