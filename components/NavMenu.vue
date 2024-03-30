<template>
  <ul class="grid gap-10 not-prose" ref="hoge">
    <li><NavLink classList="font-semibold" link="/about" :toggleModal="toggleModal">自己紹介</NavLink></li>
    <li>
      <p class="mb-4 font-semibold">カテゴリー</p>
      <ul class="grid gap-3 pl-4 border-l-2">
        <li><NavLink link="/category/technology" :toggleModal="toggleModal">技術記事</NavLink></li>
      </ul>
    </li>
    <li>
      <p class="mb-4 font-semibold">情報発信</p>
      <ul class="grid gap-3 pl-4 border-l-2">
        <li><NavLink link="https://twitter.com/tasuku_web" targetBlank="true" :toggleModal="toggleModal">Twitter</NavLink></li>
        <li><NavLink link="https://zenn.dev/tasukuwatanabe" targetBlank="true" :toggleModal="toggleModal">Zenn</NavLink></li>
        <li><NavLink link="https://github.com/tasukuwatanabe" targetBlank="true" :toggleModal="toggleModal">Github</NavLink></li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
defineProps(['showModal', 'toggleModal']);
</script>