<template>
  <div class="grid gap-5">
    <NuxtLink
      v-for="post in posts"
      :key="post._path"
      :to="post._path"
      class="bg-white rounded-xl overflow-hidden"
    >
      <img :src="post.thumbnail" class="aspect-thumbnail w-full" />
      <div class="p-5 grid gap-3">
        <div>
          <CategoryTag :category="post.category" />
        </div>
        <div class="font-semibold text-xl">{{ post.title }}</div>
        <div>{{ post.displayDate }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { category } = defineProps(['category']);

const { data } = await useAsyncData('blog-list', () => {
  return queryContent('/')
    .where({ type: { $eq: 'post' }, category: { $eq: category } })
    .only(['_path', 'title', 'createdAt', 'thumbnail', 'category'])
    .sort({ createdAt: -1 })
    .find();
});

const posts = computed(() => {
  if (!data.value) return [];

  return data.value.map((post) => {
    if (post.createdAt) {
      const createdAt = new Date(post.createdAt);
      const year = createdAt.getFullYear();
      const month = (createdAt.getMonth() + 1).toString().padStart(2, '0');
      const date = createdAt.getDate().toString().padStart(2, '0');

      post.displayDate = `${year}年${month}月${date}日`;
    } else {
      post.displayDate = '';
    }

    return post;
  });
});
</script>
