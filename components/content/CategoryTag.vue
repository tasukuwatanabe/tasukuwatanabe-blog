<template>
  <div
    class="inline-block border text-xs py-1 px-2 rounded-sm border-zinc-400 dark:border-slate-500 bg-zinc-100 dark:bg-slate-700 text-zinc-800 dark:text-gray-300"
    :class="className"
  >
    {{ category }}
  </div>
</template>

<script setup>
const { category, className } = defineProps(['category', 'className']);
</script>
