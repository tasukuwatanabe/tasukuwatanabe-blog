export const useMeta = () => {
  const convertAbsoluteMeta = async () => {
    const url = useRequestURL();
    useSeoMeta({
      ogUrl: url.href,
      twitterUrl: url.href,
    });

    const route = useRoute();
    const { data: entry } = await useAsyncData('entry', () =>
      queryContent(route.path).findOne()
    );

    if (entry._value.thumbnail) {
      const thumbnailSrc = `${url.origin}${entry._value.thumbnail}`;

      useSeoMeta({
        ogImage: thumbnailSrc,
        twitterImage: thumbnailSrc,
      });
    }
  };

  return { convertAbsoluteMeta };
};
