<template>
  <div class="grid gap-5">
    <NuxtLink
      v-for="entry in entries"
      :key="entry._path"
      :to="entry._path"
      class="bg-white rounded-xl overflow-hidden"
    >
      <img :src="entry.thumbnail" class="aspect-thumbnail w-full" />
      <div class="p-5 grid gap-3">
        <div>
          <CategoryTag :category="entry.category" />
        </div>
        <div class="font-semibold text-xl">{{ entry.title }}</div>
        <div>{{ entry.displayDate }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { category } = defineProps(['category']);

const { data } = await useAsyncData('entry-list', () => {
  return queryContent('/entry')
    .where({ type: { $eq: 'entry' }, category: { $eq: category } })
    .only(['_path', 'title', 'createdAt', 'thumbnail', 'category'])
    .sort({ createdAt: -1 })
    .find();
});

const entries = computed(() => {
  if (!data.value) return [];

  return data.value.map((entry) => {
    if (entry.createdAt) {
      const createdAt = new Date(entry.createdAt);
      const year = createdAt.getFullYear();
      const month = (createdAt.getMonth() + 1).toString().padStart(2, '0');
      const date = createdAt.getDate().toString().padStart(2, '0');

      entry.displayDate = `${year}年${month}月${date}日`;
    } else {
      entry.displayDate = '';
    }

    return entry;
  });
});
</script>
