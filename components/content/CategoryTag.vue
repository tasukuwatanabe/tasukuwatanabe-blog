<template>
  <div
    class="inline-block border text-xs py-1 px-2 rounded-sm border-zinc-400 bg-zinc-100 text-zinc-800"
    :class="className"
  >
    {{ category }}
  </div>
</template>

<script setup>
const { category, className } = defineProps(['category', 'className']);
</script>
