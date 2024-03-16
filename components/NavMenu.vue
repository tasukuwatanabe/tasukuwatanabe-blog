<template>
  <ul class="grid gap-10">
    <li>
      <NuxtLink to="#" class="font-semibold">自己紹介</NuxtLink>
    </li>
    <li>
      <p class="mb-4 font-semibold">カテゴリー</p>
      <ul class="grid gap-3 pl-4 border-l-2">
        <li><NuxtLink to="/technology">技術記事</NuxtLink></li>
        <li><NuxtLink to="/online-degree">オンライン留学</NuxtLink></li>
      </ul>
    </li>
    <li>
      <p class="mb-4 font-semibold">情報発信</p>
      <ul class="grid gap-3 pl-4 border-l-2">
        <li><NuxtLink to="https://twitter.com/tasuku_web" target="_blank">Twitter</NuxtLink></li>
        <li>
          <NuxtLink to="https://github.com/tasukuwatanabe" target="_blank"
            >Github</NuxtLink
          >
        </li>
        <li><NuxtLink to="https://note.com/tasuku_web/" target="_blank">Note</NuxtLink></li>
      </ul>
    </li>
  </ul>
</template>
