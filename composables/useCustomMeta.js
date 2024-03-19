export const useCustomMeta = () => {
  const addUrl = (pageUrl) => {
    useSeoMeta({
      ogUrl: pageUrl,
      twitterUrl: pageUrl,
    });
  };

  const addImage = (thumbnailUrl) => {
    useSeoMeta({
      ogImage: thumbnailUrl,
      twitterImage: thumbnailUrl,
    });
  };

  const getFullThumbnailUrl = async (origin) => {
    const route = useRoute();
    const { data: entry } = await useAsyncData('entry', () =>
      queryContent(route.path).findOne()
    );

    let thumbnailUrl;
    if (entry._value.thumbnail) {
       thumbnailUrl = `${origin}${entry._value.thumbnail}`;
    }

    return thumbnailUrl;
  }

  const addCustomMeta = () => {
    const url = useRequestURL();
    addUrl(url.href);

    const fullThumbnailUrl = getFullThumbnailUrl(url.origin);
    if (fullThumbnailUrl) addImage(fullThumbnailUrl);
  };

  return { addCustomMeta };
};
